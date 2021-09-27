const expect = require('chai').expect
const converter = require('../index.js')

const strArb = 'قازاقشا جازۋلاردى سايكەستىرۋ-ولشەمدەندىرۋ سيستەماسى ءبىلىم، ءوزارا ۇيرەنۋ. كىتاپ — ءبىلىم بۇلاعى.ءۇش-اق نارسە ادامنىڭ قاسيەتى،ىستىق قايرات، نۇرلى اقىل، جىلى جۇرەك.'
const strCyr = 'Қазақша жазуларды сәйкестіру-өлшемдендіру системасы Білім, өзара үйрену. Кітап — Білім бұлағы. Үш-ақ нәрсе адамның қасиеті, Ыстық қайрат, нұрлы ақыл, жылы жүрек.'
const strLat = "Qazaqs'a jazy'lardy sa'i'kestiry'-o'ls'emdendiry' si'stemasy bilim, o'zara u'i'reny'. Kita'p — bilim bulag'y.U's'-aq na'rse adamnyn' qasi'eti,istiq qai'rat, nurly aqyl, jyly ju'rek."

describe('Test Arabic to Cyrillic =>', () => {
  it('Arabic to Cyrillic', function () {
    expect(converter(strArb,'Cyrillic')).to.be.equal('Қазақша жазуларды сәикестіру-өлшемдендіру системәсі білым, өзәра үирену. Кітәп — білым бұлағы.Үш-ақ нәрсе адамның қәсиеті,ыстық қаират, нұрлы ақыл, жылы жүрек.')
  })
})

describe('Test Cyrillic to Arabic =>', () => {
  it('Arabic to Cyrillic', function () {
    expect(converter(strCyr,'Arabic')).to.be.equal('قازاقشا جازۋلاردى سايكەستىرۋ-ولشەمدەندىرۋ سيستەماسى ءبىلىم، ءوزارا ۇيرەنۋ. كىتاپ — ءبىلىم بۇلاعى. ءۇش-اق نارسە ادامنىڭ قاسيەتى، ىستىق قايرات، نۇرلى اقىل، جىلى جۇرەك.')
  })
})

describe('Test Arabic to Latin =>', () => {
  it('Arabic to Latin', function () {
    expect(converter(strArb,'Latin')).to.be.equal("Qazaqs\'a jazy\'lardy sa\'i\'kestiry\'-o\'ls\'emdendiry\' si\'stemasy bilim, o\'zara u\'i\'reny\'. Kita\'p — bilim bulag\'y.U\'s\'-aq na\'rse adamnyn\' qasi\'eti,istiq qai\'rat, nurly aqyl, jyly ju\'rek.")
  })
})

describe('Test Latin to Cyrillic =>', () => {
  it('Latin to Cyrillic', function () {
    expect(converter(strLat,'Cyrillic')).to.be.equal("Қазақша жазуларды сәйкестіру-өлшемдендіру системасы білім, өзара үйрену. Кітәп — білім бұлағы.Үш-ақ нәрсе адамның қасиеті,істіқ қайрат, нұрлы ақыл, жылы жүрек.")
  })
})

