export function validateEmail(email: string) {
  const regEmail =
    /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
  return regEmail.test(email) && email.length <= 255;
}
