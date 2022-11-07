import bcrypt from "bcrypt";

const saltRounds = 12;
const plaintextPassword = "shooter123";
const loginPassword = "shooter123";
const encryptedPasswordHash = "$2b$12$.lnx9dWb7MLww5/FwUF1fusoCxM.WLyZH5hdOmavOeecPwpSL7zBq";

const encryptedPassword = await bcrypt.hash(plaintextPassword,saltRounds);
console.log(encryptedPassword)

const passwordcomparison = await bcrypt.compare(loginPassword,encryptedPasswordHash)
console.log(passwordcomparison)