module.exports = createValidator

function createValidator() {

  function validate(key, keyDisplayName, object, cb) {

    var num = object[key]

    // num is NaN or not a number
    if (num !== null && (isNaN(num) || typeof num !== 'number')) return cb(null, keyDisplayName + ' must be a number if present')

    // num is a number Success!
    return cb(null)

  }

  return validate

}