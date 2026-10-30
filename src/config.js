// Number in international format, digits only: no +, no spaces, no leading 0.
// Nigerian example: 0801 234 5678  ->  2348012345678
export const WHATSAPP_NUMBER = '2349026851735'

export const WHATSAPP_MESSAGE =
  "Hi Fountain, I saw your portfolio and I'd like a website built."

export const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`