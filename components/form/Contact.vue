<script setup lang="ts">
import { FetchError } from "ofetch";
import { contactSchema } from "~/schemas/contactSchema";

const { showToast } = useToastStore();

const { resetForm, handleSubmit, isSubmitting } = useForm({
  validationSchema: toTypedSchema(contactSchema),
});

const { value: messageFieldValue, errorMessage: messageFieldError } = useField<string>("message");

const onSubmit = handleSubmit(async (values) => {
  try {
    const response = await $fetch("/api/contact", {
      method: "POST",
      body: values,
    });

    showToast(response.message);
    resetForm();
  }
  catch (err: unknown) {
    const defaultErrorMessage = "An unexpected error occurred. Please try again later.";
    const errorMessage = err instanceof FetchError && err.statusMessage ? err.statusMessage : defaultErrorMessage;

    showToast(errorMessage, "error");
  }
});
</script>

<template>
  <form
    class="grid grid-cols-1 gap-y-4"
    @submit="onSubmit"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -left-full"
    >
      <FormLabelVee
        field-id="form-city"
        name="city"
      >
        City
      </FormLabelVee>
      <FormInputVee
        id="form-city"
        name="city"
        placeholder="Warsaw"
        autocomplete="off"
        tabindex="-1"
      />
    </div>
    <div v-auto-animate>
      <FormLabelVee
        field-id="form-email"
        name="email"
      >
        Email
      </FormLabelVee>
      <FormInputVee
        id="form-email"
        name="email"
        placeholder="john.doe@example.com"
        type="email"
      />
    </div>
    <div v-auto-animate>
      <FormLabelVee
        field-id="form-subject"
        name="subject"
      >
        Subject
      </FormLabelVee>
      <FormInputVee
        id="form-subject"
        name="subject"
        placeholder="What's up?"
        minlength="8"
        maxlength="64"
      />
    </div>
    <div v-auto-animate>
      <FormLabelVee
        field-id="form-message"
        name="message"
      >
        Message
      </FormLabelVee>
      <textarea
        id="form-message"
        v-model="messageFieldValue"
        class="
          border p-3 border-decorative-lighter max-h-96 min-h-48 w-full
          rounded-xl font-light placeholder-foreground-lightest outline-none
          transition duration-300 ease-in-out

          focus:border-primary focus:outline-none focus:ring-primary

          hover:border-primary

          md:text-lg
        "
        :class="{ 'border-red-700 focus:border-red-700 focus:outline-none focus:ring-red-700 hover:border-red-700': messageFieldError }"
        placeholder="Type your message here..."
        minlength="32"
        maxlength="1024"
      />
      <p
        v-if="messageFieldError"
        class="
          mt-1 text-sm font-light text-red-700

          md:text-base
        "
      >
        {{ messageFieldError }}
      </p>
    </div>
    <ButtonVariant
      type="submit"
      class="
        disabled:bg-foreground-lighter disabled:text-white

        md:w-fit
      "
      :icon-name="!isSubmitting ? 'send-2' : 'loader-2'"
      :icon-animation="isSubmitting ? 'spin' : undefined"
      :disabled="isSubmitting"
    >
      Drop me a message
    </ButtonVariant>
  </form>
</template>
