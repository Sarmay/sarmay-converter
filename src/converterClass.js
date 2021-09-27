
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
