express-validatorjs
====
expressjs request helper validatorjs method

## Installation
```
$ npm install express-validatorjs
```

## Usage
```javascript
const expressInput = require('express-input')
app.use(expressInput())
const expressValidatorjs = require('express-validatorjs')
app.use(expressValidatorjs((Validator) => { Validator.useLang('ja') }))
```
```javascript
const validation = req.validator({prm1: 'required|integer'})
validation.passes() // true
validation.fails() // false
validation.errors.first('prm1')
```

## Licence

[MIT](http://opensource.org/licenses/mit-license.php)

## Author

[nmrmsys](https://github.com/nmrmsys)