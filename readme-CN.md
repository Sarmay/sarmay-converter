# @Sarmay/converter

## [English](https://github.com/Sarmay/sarmay-converter#readme) | 简体中文

### 这是一个把哈萨克语的阿拉伯文、西里尔文、拉丁文相互转换的工具

> 暂时实现了以下功能：阿拉伯文转西里尔文、西里尔文转阿拉伯文、阿拉伯文转拉丁文、拉丁文转西里尔文

[![npm version](https://img.shields.io/npm/v/@sarmay/converter.svg?style=flat-square)](https://www.npmjs.org/package/@sarmay/converter)
[![Build Status](https://www.travis-ci.com/Sarmay/sarmay-converter.svg?branch=master)](https://www.travis-ci.com/Sarmay/sarmay-converter)    [![Coverage Status](https://coveralls.io/repos/github/Sarmay/sarmay-converter/badge.svg?branch=main)](https://coveralls.io/github/Sarmay/sarmay-converter?branch=main)   [![install size](https://packagephobia.now.sh/badge?p=@sarmay/converter)](https://packagephobia.now.sh/result?p=@sarmay/converter)
[![GitHub issues](https://img.shields.io/github/issues/Sarmay/sarmay-converter)](https://github.com/Sarmay/sarmay-converter/issues)   [![GitHub forks](https://img.shields.io/github/forks/Sarmay/sarmay-converter)](https://github.com/Sarmay/sarmay-converter/network)   [![GitHub stars](https://img.shields.io/github/stars/Sarmay/sarmay-converter)](https://github.com/Sarmay/sarmay-converter/stargazers)


# 安装

### 使用 npm:

```shell
$ npm install @sarmay/converter
```

### 使用 yarn:

```shell
$ yarn add @sarmay/converter
```

### 使用 jsDelivr CDN:

```
<script src="https://cdn.jsdelivr.net/npm/@sarmay/converter/dist/index.min.js"></script>
```
### 使用 unpkg CDN:

```
<script src="https://unpkg.com/@sarmay/converter/dist/index.min.js"></script>
```

# 使用

> 参数：要转换的文字，输出类型，输入类型（可选）

### 参数1:  `<String>`要转换的文字

```
哈萨克语阿拉伯文|哈萨克语西里尔文|哈萨克语拉丁文
```

### 参数2:  `<String>`输出的类型

```
Cyrillic | Arabic | Latin
```

### 参数3可选:  `<String>`输入的文字类型（程序默认自动识别输入的文字类型）

```
Cyrillic | Arabic | Latin
```


### 用于 Node

```
const converter = require('@sarmay/converter')
const value = converter('سالەم سارماي','Cyrillic','Arabic')
console.log(value)
```

### 用于 Vue
-    提示: React / Angular  用法一样

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
      webIME('kz', event)
      this.newValue = converter(this.value,'Cyrillic','Arabic')
    }
  }
}
</script>
```
### 用于 Html script

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
         sarmayIme('kz', event);
         show.innerText = sarmayConverter(values.value,'Cyrillic','Arabic')
      });
    </script>
  </body>
</html>
```

## License

[MIT](LICENSE)