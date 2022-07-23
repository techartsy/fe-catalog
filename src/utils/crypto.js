const CryptoJS = require("crypto-js");
require("dotenv").config();

exports.decryptData = (data) => {
  const bytes = CryptoJS.AES.decrypt(data, process.env.REACT_APP_SECRET_KEY);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};

exports.encryptData = (data) => {
  const ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    process.env.CRYPTO_SECRET_KEY
  ).toString();
  return ciphertext;
};
