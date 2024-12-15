<template>
  <SectionBase>
    <TypographyHeading class="mb-1">
      Get in Touch
    </TypographyHeading>
    <TypographyParagraph
      class="mb-3"
      variant="thin"
    >
      Reach out for collaboration or inquiries
    </TypographyParagraph>
    <TypographyParagraph class="mb-3 text-justify">
      I'd love to hear from you! Whether it's about my projects, collaboration opportunities, or any questions you have, feel free to get in touch.
    </TypographyParagraph>
    <div class="mb-3 flex flex-col gap-y-2 place-self-start">
      <ButtonContact icon-name="brand-github">
        @marchewadm
      </ButtonContact>
      <ButtonContact icon-name="brand-linkedin">
        @merchwadawid
      </ButtonContact>
      <ButtonContact icon-name="brand-discord">
        @marchewa02
      </ButtonContact>
      <ButtonContact
        icon-name="mail"
        href="mailto:merchwa.dawid@gmail.com"
      >
        merchwa.dawid@gmail.com
      </ButtonContact>
    </div>
    <form class="flex w-full flex-col">
      <FormLabel for="form-email">
        Email
      </FormLabel>
      <FormInput
        id="form-email"
        class="w-full"
        placeholder="john.doe@example.com"
        type="email"
      />
      <FormLabel for="form-subject">
        Subject
      </FormLabel>
      <FormInput
        id="form-subject"
        class="w-full"
        placeholder="What's up?"
        minlength="8"
        maxlength="64"
      />
      <FormLabel for="form-message">
        Message
      </FormLabel>
      <textarea
        id="form-message"
        class="border p-3 border-decorative-lighter mb-4 h-48 rounded-xl"
        placeholder="Type your message here..."
        minlength="32"
        maxlength="1024"
      />
      <ButtonVariant
        icon-name="send-2"
        type="submit"
      >
        Drop me a message
      </ButtonVariant>
    </form>
  </SectionBase>
</template>
