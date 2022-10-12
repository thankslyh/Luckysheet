import './utils/math'
import luckysheetformula from './global/formula'
import { luckysheet } from './core'
import __firefox from './utils/polyfill'
// Prevent gulp warning: 'Use of eval is strongly discouraged, as it poses security risks and may cause issues with minification'
// window.evall = window.eval;
// polyfill event in firefox
if(window.addEventListener && (navigator.userAgent.indexOf("Firefox") > 0)){
    __firefox();
}
// 公式解析
// luckysheetformula.functionParser('=Timeline02+Timeline_01+SUM(Timeline_03:Timeline_3)')
// luckysheetformula.functionParser('=C22+C22+SUM(D22:D24))')
// const funcstr = luckysheetformula.functionParserExe(`=SUM(G5:G8)*10%+SUM(G12:G17)*10%+G9*10%`)
// console.log('funcstr', funcstr)
// console.log('--------------------------\n')
// const funcstr2 = luckysheetformula.functionParserExe(`=SUM(G5:G8)*10+SUM(G12:G17)*10+G9*10`)
// console.log('funcstr', funcstr2)
// const funcstr = luckysheetformula.functionParserExe(`=SUMIFS('4 Service Fee Breakdown 服务费明细'!$Q$8:$Q$680,'4 Service Fee Breakdown 服务费明细'!$H$8:$H$680,$C$2,'4 Service Fee Breakdown 服务费明细'!$AE$8:$AE$680,B4)+C24/4`)
// console.log('funcstr', funcstr)
// =ROUNDUP(Timline_MW_1/12,0)
// setTimeout(() => {
//     const funcstr = luckysheetformula.functionParserExe(`=Timeline02+Timeline_01+SUM(Timeline_03:Timeline_3)`)
//     console.log('funcstr', funcstr)
// }, 2000)
// new Function(funcstr)
// export default luckysheet;
// setTimeout(() => {
//     luckysheetformula.getcellrange(`F34`, 26)
//     luckysheetformula.getcellrange(`'2 Key Assumption 报价主要假设'!$F$31`, 26)
//     luckysheetformula.getcellrange(`F32:F34`, 26)
// }, 2000)
// use esbuild,bundle iife format
module.exports =  luckysheet
