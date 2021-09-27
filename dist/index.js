(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sarmayConverter"] = factory();
	else
		root["sarmayConverter"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 872:
/***/ ((module) => {


function replaceStr (a, b, c, d) {
  d = d || 'g'
  for (const e in b) {
    a = a.replace(new RegExp(b[e], d), c[e])
  }
  return a
}

// eslint-disable-next-line max-len
const toteReg = /([\u060c\u061f\u061b\u0621\u0627\u0628\u062a\u062c\u062d\u062f\u0631-\u0634\u0639\u0641-\u0646\u0648-\u064a\u067e\u0686\u06ad\u06af\u06be\u06c6\u06c7\u06cb\u06d5]+)/g

class Converter {
  cyrillic2arabic (a) {
    a = replaceStr(a, ['А', 'Ә', 'Б', 'В', 'Г', 'Ғ', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Қ', 'Л', 'М', 'Н', 'Ң', 'О', 'Ө', 'П', 'Р', 'С', 'Т', 'У', 'Ұ', 'Ү', 'Ф', 'Х', 'Һ', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'І', 'Ь', 'Э', 'Ю', 'Я', '\\,', '\\;', '\\?'], ['ا', 'ءا', 'ب', 'ۆ', 'گ', 'ع', 'د', 'ە', 'يو', 'ج', 'ز', 'ي', 'ي', 'ك', 'ق', 'ل', 'م', 'ن', 'ڭ', 'و', 'ءو', 'پ', 'ر', 'س', 'ت', 'ۋ', 'ۇ', 'ءۇ', 'ف', 'ح', 'ھ', 'س', 'چ', 'ش', 'شش', '', 'ى', 'ءى', '', 'ە', 'يۋ', 'يا', '،', '؛', '؟'], 'gi')
    a = a.replace(/ييا/g, 'يا')
    return a.replace(toteReg, function (d) {
      function b (c) {
        return c.replace(/\u0621/g, '')
      };
      return (d.search(/\u0621/) >= 0 && d.search(/[\u06af\u0643\u06d5]/) < 0) ? 'ء' + b(d) : b(d)
    })
  }

  arabic2cyrillic (a) {
    function initials (val) {
      val = val.toLowerCase()
      val = val.replace(/([\n\u0021\u002e\u003f]+|^\s*)([\s\u0021-\u0040\u005b-\u0060\u007b-\u007e\u00a1-\u00bf\u00d7\u00f7]*)./g, function (str) {
        return str.toUpperCase()
      })
      return val
    }

    a = a.replace(toteReg, function (val) {
      const b = ['ا', 'ب', 'ۆ', 'گ', 'ع', 'د', 'ە', 'ج', 'ز', 'ي', 'ك', 'ق', 'ل', 'م', 'ن', 'ڭ', 'و', 'پ', 'ر', 'س', 'ت', 'ۋ', 'ۇ', 'ف', 'ح', 'ھ', 'چ', 'ش', 'ى', '،', '؛', '؟']
      const c = ['а', 'б', 'в', 'г', 'ғ', 'д', 'е', 'ж', 'з', 'и', 'к', 'қ', 'л', 'м', 'н', 'ң', 'о', 'п', 'р', 'с', 'т', 'у', 'ұ', 'ф', 'х', 'һ', 'ч', 'ш', 'ы', ',', ';', '?']

      if (val.search(/[\u0621\u06d5\u06af\u0643]/) < 0) {
        val = replaceStr(val, b, c, 'g')
      } else {
        val = replaceStr(val, b, c, 'g')
        val = val.replace(/а/, 'Ә')
        val = val.replace(/о/, 'Ө')
        val = val.replace(/ы/, 'І')
        val = val.replace(/ұ/, 'Ү')
        val = val.replace(/\u0621/g, '')
      };
      return val
    })
    return initials(a)
  }

  arabic2latin (a) {
    function repair (val) {
      const b = ["c'", 'f', 'v', 'tele', "i'ka", "i'o'n", "ju'n'go", "[ln]i'[sz]"]
      const c = "([a-dfh-jl-z']*|g'*)"
      val = val.replace(
        new RegExp("g'" + c + '|[qh]' + c + "|(a'.a')" + c + '|([er])' + c + '([ao])' + c + "|([a-z']*)(" + b.join('|') + ")([a-z']*)", 'gi'),
        function (str) {
          return str.replace(/([aou])'/gi, '$1')
        }
      )
      val = val.replace(
        new RegExp("g'" + c + '|[qh]' + c + "|[aou](?!')" + c, 'gi'),
        function (str) {
          return str.replace(/i(?!')/gi, 'y')
        }
      )
      return replaceStr(val,
        ["ko'lba'i'", "a'y'zimen", "ba'simen"],
        ["ko'lbai'", "ay'zymen", 'basymen'],
        'gi'
      )
    }
    function initials (val) {
      val = val.toLowerCase()
      val = val.replace(/([\n\u0021\u002e\u003f]+|^\s*)([\s\u0021-\u0040\u005b-\u0060\u007b-\u007e\u00a1-\u00bf\u00d7\u00f7]*)./g, function (str) {
        return str.toUpperCase()
      })
      return val
    }

    a = a.replace(toteReg, function (val) {
      const b = ['ا', 'ب', 'ۆ', 'گ', 'ع', 'د', 'ە', 'ج', 'ز', 'ي', 'ك', 'ق', 'ل', 'م', 'ن', 'ڭ', 'و', 'پ', 'ر', 'س', 'ت', 'ۋ', 'ۇ', 'ف', 'ح', 'ھ', 'چ', 'ش', 'ى', '،', '؛', '؟']
      const c = ['a', 'b', 'v', 'g', "g'", 'd', 'e', 'j', 'z', "i'", 'k', 'q', 'l', 'm', 'n', "n'", 'o', 'p', 'r', 's', 't', "y'", 'u', 'f', 'h', 'h', "c'", "s'", 'y', ',', ';', '?']
      if (val.search(/[\u0621\u06d5\u06af\u0643]/) < 0) {
        val = replaceStr(val, b, c, 'g')
      } else {
        val = replaceStr(val, b, c, 'g')
        val = val.replace(/([aou])/g, "$1'")
        val = val.replace(/y(?!')/g, 'i')
        val = val.replace(/\u0621/g, '')
      };
      return repair(val)
    })
    return initials(a)
  }

  latin2cyrillic (a) {
    a = a.replace(/[\u2019\u2018\u0060]/g, "'")
    a = a.replace(/([bdf-hj-np-tvz]|[cgnsy]')(i')(a)/gi, '$1$2$2$3')
    a = replaceStr(a,
      ["A'", "a'", "C'", "c'", "G'", "g'", "I'", "i'", "N'", "n'", "O'", "o'", "S'", "s'", "U'", "u'", "Y'", "y'", 'A', 'a', 'B', 'b', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'Y', 'y', 'Z', 'z'],
      ['Ә', 'ә', 'Ч', 'ч', 'Ғ', 'ғ', 'И', 'и', 'Ң', 'ң', 'Ө', 'ө', 'Ш', 'ш', 'Ү', 'ү', 'У', 'у', 'А', 'а', 'Б', 'б', 'Д', 'д', 'Е', 'е', 'Ф', 'ф', 'Г', 'г', 'Х', 'х', 'І', 'і', 'Ж', 'ж', 'К', 'к', 'Л', 'л', 'М', 'м', 'Н', 'н', 'О', 'о', 'П', 'п', 'Қ', 'қ', 'Р', 'р', 'С', 'с', 'Т', 'т', 'Ұ', 'ұ', 'В', 'в', 'Ы', 'ы', 'З', 'з']
    )
    a = a.replace(/([АаӘәОоӨөҰұҮүЫыІіЕе])и/g, '$1й')
    a = a.replace(/([АаӘәОоӨөҰұҮүЫыІіЕе])И/g, '$1Й')
    a = a.replace(/[ий][АаӘә]/g, 'я')
    a = a.replace(/[ИЙ][АаӘә]/g, 'Я')
    a = a.replace(/[ий][Уу]/g, 'ю')
    a = a.replace(/[ИЙ][Уу]/g, 'Ю')
    a = a.replace(/ш[Шш]/g, 'щ')
    a = a.replace(/Ш[Шш]/g, 'Щ')
    return a
  }
}

module.exports = Converter


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ conversion)
/* harmony export */ });
const Converter = __webpack_require__(872)

const { cyrillic2arabic, arabic2cyrillic, arabic2latin, latin2cyrillic } = new Converter()

// 输入文本类型判断
function typeJudgment (string) {
  const regList = {
    Cyrillic: /[\u0400-\u04FF]|[\u0500-\u052F]|[\u2DE0-\u2DFF]|[\uA640-\uA69F]/g,
    Arabic: /[\u0600-\u06FF]/g,
    Latin: /[\u0041-\u005A]|[\u0061-\u007A]|[\u00C0-\u00D6]|[\u00D8-\u00F6]|[\u00F8-\u00FF]|[\u0100-\u017F]|[\u0180-\u01BF]/g
  }
  const charCountList = []
  for (const key in regList) {
    if (Object.hasOwnProperty.call(regList, key)) {
      const reg = regList[key]
      const matched = string.match(reg)
      const count = matched ? matched.length : 0
      charCountList.push({
        key,
        count
      })
    }
  }
  charCountList.sort((a, b) => b.count - a.count)
  return charCountList[0].key
}

// 判断数据是否合法
function checkLegitimacy (string, to, from) {
  // 判断是否为字符串
  if (typeof string !== 'string') {
    throw new Error('The content entered must be a string;输入的内容必须是字符串。')
  }
  // 判断是否为空
  if (!string || (string && !string.trim())) {
    throw new Error('The input content cannot be empty;输入的内容不能为空。')
  }
  // 判断参数是否为空
  if (!to) {
    throw new Error('Essential parameters cannot be empty;必备参数不能为空。')
  }
  if (from && !['Cyrillic', 'Arabic', 'Latin'].includes(from)) {
    throw new Error('Essential parameters from must be one of [Cyrillic,Arabic,Latin];字符串必须为x之一。')
  }
}

function conversion (string = '', to = 'Cyrillic', from = null) {
  // 检验参数的合法性
  checkLegitimacy(string, to, from)
  // 判断输入文字属于那个语言
  let inputLang = from
  if (!from) {
    inputLang = typeJudgment(string)
  }
  if (inputLang === to) return string
  const langList = ['Cyrillic', 'Arabic', 'Latin']
  if (!langList.includes(inputLang) || !langList.includes(to)) return string
  if (to === 'Cyrillic' && inputLang === 'Arabic') {
    return arabic2cyrillic(string)
  }
  if (to === 'Arabic' && inputLang === 'Cyrillic') {
    return cyrillic2arabic(string)
  }
  if (to === 'Latin' && inputLang === 'Arabic') {
    return arabic2latin(string)
  }
  if (to === 'Cyrillic' && inputLang === 'Latin') {
    return latin2cyrillic(string)
  }

  return string
}

})();

__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});