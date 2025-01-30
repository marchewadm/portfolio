<template>
  <SectionHomeBase>
    <TypographyHeading class="mb-1">
      Get in Touch
    </TypographyHeading>
    <TypographyParagraph
      class="mb-3"
      variant="thin"
    >
      Reach out for collaboration or inquiries
    </TypographyParagraph>
    <div
      class="
        grid grid-cols-1

        md:grid-cols-2 md:gap-x-20
      "
    >
      <div>
        <TypographyParagraph class="mb-3 text-justify">
          I'd love to hear from you! Whether it's about my projects, collaboration opportunities, or any questions you have, feel free to get in touch.
        </TypographyParagraph>
        <div
          class="
            mb-3 flex flex-col gap-y-2 place-self-start

            md:gap-y-3
          "
        >
          <LinkIconExternal icon-name="brand-github">
            @marchewadm
          </LinkIconExternal>
          <LinkIconExternal icon-name="brand-linkedin">
            @merchwadawid
          </LinkIconExternal>
          <LinkIconExternal icon-name="brand-discord">
            @marchewa02
          </LinkIconExternal>
          <LinkIconExternal
            icon-name="mail"
            href="mailto:merchwa.dawid@gmail.com"
          >
            merchwa.dawid@gmail.com
          </LinkIconExternal>
        </div>
      </div>
      <form class="grid grid-cols-1 gap-y-4">
        <div>
          <FormLabel for="form-email">
            Email
          </FormLabel>
          <FormInput
            id="form-email"
            class="w-full"
            placeholder="john.doe@example.com"
            type="email"
          />
        </div>
        <div>
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
        </div>
        <div>
          <FormLabel for="form-message">
            Message
          </FormLabel>
          <textarea
            id="form-message"
            class="
              border p-3 border-decorative-lighter max-h-96 min-h-48 w-full
              rounded-xl font-light placeholder-foreground-lightest outline-none
              transition duration-300 ease-in-out

              focus:border-primary focus:outline-none focus:ring-primary

              hover:border-primary

              md:text-lg
            "
            placeholder="Type your message here..."
            minlength="32"
            maxlength="1024"
          />
        </div>
        <ButtonVariant
          icon-name="send-2"
          type="submit"
          class="md:w-fit"
        >
          Drop me a message
        </ButtonVariant>
      </form>
    </div>
  </SectionHomeBase>
</template>
