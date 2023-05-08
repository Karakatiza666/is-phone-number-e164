const regex = /^\+[1-9]\d{6,14}$/

export const isPhoneNumberE164 = (phone: string) => {
   if (typeof phone !== 'string') {
      throw new TypeError('Expected a string');
   }

   return regex.test(phone);
}

export const toPhoneNumberE164 = (phone: string) =>
   '+' + phone.replace(/\D/g, '')

export const assertPhoneNumberE164 = (phone: string) => {
   if (!isPhoneNumberE164(phone)) {
      throw new Error(`assertPhoneNumberE164: '${phone}' is not a E.164 phone number`)
   }
   return phone
}