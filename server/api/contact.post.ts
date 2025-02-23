import { contactSchema } from "~/schemas/contactSchema";

export default defineEventHandler(async (event) => {
  const successMessage = "Message sent successfully! I will get back to you as soon as possible." as const;

  const result = await readValidatedBody(event, body => contactSchema.safeParse(body));

  // If the body is invalid, return an error response.
  if (!result.success) {
    // If the body contains filled honeypot field named `city`, it's probably a bot and the request should be ignored. It returns a 200 status code on purpose to avoid revealing the honeypot field to the bot.
    if (result.error.formErrors.fieldErrors.city) {
      return { message: successMessage };
    }
    else {
      throw createError({
        statusCode: 400,
        statusMessage: "Please ensure all required fields are filled correctly and try again.",
      });
    }
  }

  // If the body is valid, send the email.
  // TODO: Implement sending the email here.

  return { message: successMessage };
});
