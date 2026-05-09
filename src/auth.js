function isPasswordValid(password) {
  return typeof password === 'string' && password.length >= 8;
}

function isEmailValid(email) {
  return typeof email === 'string' && email.includes('@') && email.includes('.');
}

module.exports = { isPasswordValid, isEmailValid };