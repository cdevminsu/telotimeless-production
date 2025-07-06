// src/lib/getMessages.js
export default async function getMessages(locale) {
  const messages = await import(`../../messages/${locale}.json`);
  return messages.default;
}
