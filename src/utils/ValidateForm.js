export const validate = ( email,password,name) => {
  if (name) {
    const validName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    if (!validName) return "Invalid Name";
  }
  const validEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const validPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!validEmail) return "Email Invalid";
  if (!validPassword) return "Password Invalid";
  return null;
};
