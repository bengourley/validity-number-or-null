# validity-number-or-null

[![Build Status](https://travis-ci.org/bengourley/validity-number-or-null.png?branch=master)](https://travis-ci.org/bengourley/validity-number-or-null)

Validity style validator to ensure a property is either null or numeric (and not `NaN`).

## Installation

    npm install validity-number-or-null

## Usage

Below is a simple example for usage with schemata:

```js

var validity = require('validity')
  , schemata = require('schemata')
  , createValidator = require('validity-number-or-null')

var schema = schemata(
    { waitTime:
      { type: Number
      , validators: { all: [ createValidator() ] }
      }
    })

schema.validate({ waitTime: 30 }, function (error, errorMessage) {
  console.log(errorMessage) //-> undefined
})

schema.validate({ waitTime: null }, function (error, errorMessage) {
  console.log(errorMessage) //-> undefined
})

schema.validate({ waitTime: 'abc' }, function (error, errorMessage) {
  console.log(errorMessage) //-> 'Wait time must be a number if present'
})
```

## API

### var validate = createValidator()

### validate(String:key, String:keyDisplayName, Object:object, Function:cb)

This is a [validity](https://npmjs.org/package/validity) compatible function, which in turn is
used by [schemata](https://npmjs.org/package/schemata) for schema validation.

The callback signature `cb(err, errorMessage)`.
- `err` is an `Error` object if something bad happened and `null` otherwise.
- `errorMessage` is a `String` if a validation error happened and `undefined` otherwise.

## Licence
Licensed under the [New BSD License](http://opensource.org/licenses/bsd-license.php)