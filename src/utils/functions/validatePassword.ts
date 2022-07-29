export function validatePassword(password: string) {
  const regEmail = /\S+/;
  return (
    regEmail.test(password) && password.length <= 60 && password.length >= 12
  );
}
