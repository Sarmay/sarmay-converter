const Converter = require('./converterClass')

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

export default function conversion (string = '', to = 'Cyrillic', from = null) {
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
