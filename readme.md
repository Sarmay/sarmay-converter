# @Sarmay/converter

## English | [简体中文](https://github.com/Sarmay/sarmay-converter/blob/main/readme-CN.md)

### This is a tool for converting between Kazakh Arabic, Cyrillic and Latin.

> The following functions are temporarily realized: Arabic to Cyrillic, Cyrillic to Arabic, Arabic to Latin, Latin to Cyrillic

[![npm version](https://img.shields.io/npm/v/@sarmay/converter.svg?style=flat-square)](https://www.npmjs.org/package/@sarmay/converter)
[![Build Status](https://www.travis-ci.com/Sarmay/sarmay-converter.svg?branch=main)](https://www.travis-ci.com/Sarmay/sarmay-converter)    [![Coverage Status](https://coveralls.io/repos/github/Sarmay/sarmay-converter/badge.svg?branch=master)](https://coveralls.io/github/Sarmay/sarmay-converter?branch=master)   [![install size](https://packagephobia.now.sh/badge?p=@sarmay/converter)](https://packagephobia.now.sh/result?p=@sarmay/converter)
[![GitHub issues](https://img.shields.io/github/issues/Sarmay/sarmay-converter)](https://github.com/Sarmay/sarmay-converter/issues)   [![GitHub forks](https://img.shields.io/github/forks/Sarmay/sarmay-converter)](https://github.com/Sarmay/sarmay-converter/network)   [![GitHub stars](https://img.shields.io/github/stars/Sarmay/sarmay-converter)](https://github.com/Sarmay/sarmay-converter/stargazers)


# Installing

### Using npm:

```
$ npm install @sarmay/converter
```

### Using yarn:

```
$ yarn add @sarmay/converter
```

### Using jsDelivr CDN:

```
<script src="https://cdn.jsdelivr.net/npm/@sarmay/converter/dist/index.min.js"></script>
```
### Using unpkg CDN:

```
<script src="https://unpkg.com/@sarmay/converter/dist/index.min.js"></script>
```

# Example

> Parameters: text to be converted, output type, input type (optional)

### Parameters 1:  `<String>`The text to be converted

```
Kazakh Arabic | Kazakh Cyrillic | Kazakh Latin
```

### Parameters 2:  `<String>`Type of output

```
Cyrillic | Arabic | Latin
```

### Parameters 3:  `<String>`Type of input (optional)

```
Cyrillic | Arabic | Latin
```

### for Node

```
const converter = require('@sarmay/converter')
const value = converter('سالەم سارماي','Cyrillic','Arabic')
console.log(value)
```

### for Vue
-    note: React / Angular  As the same below

```
<template>
  <div>
    <textarea v-model="value" name="sarmay-ime" id="sarmay-ime" cols="30" rows="10" @keydown="keydownHandel"></textarea>
    <div>{{newValue}}</div>
  </div>
</template>
<script>
  import webIME from '@sarmay/web-ime'
  import converter from '@sarmay/converter'
  export default {
  data() {
    return {
      value: '',
      newValue: ''
    }
  },

  methods: {
    keydownHandel(event) {
      const inputValue = webIME('kz', event)
      this.newValue = converter(inputValue,'Cyrillic','Arabic')
    }
  }
}
</script>
```
### for Html script

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>@Sarmay/converter</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--  load from unpkg -->
    <script src="https://unpkg.com/@sarmay/web-ime/dist/index.min.js"></script>
    <script src="https://unpkg.com/@sarmay/converter/dist/index.min.js"></script>
    <!--  or load from  jsdelivr
      <script src="https://cdn.jsdelivr.net/npm/@sarmay/web-ime/dist/index.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@sarmay/converter/dist/index.min.js"></script>
    -->
  </head>
  <body>
    <div>
      <textarea name="values" id="values" cols="50" rows="10"></textarea>
      <div id="show"></div>
    </div>
    <script>
      var values = document.getElementById('values');
      var show = document.getElementById('show');
      values.addEventListener("keydown", function(event) {
         var newValue = sarmayIme('kz', event);
         show.innerText = sarmayConverter(newValue,'Cyrillic','Arabic')
      });
    </script>
  </body>
</html>
```

## License

[MIT](LICENSE)