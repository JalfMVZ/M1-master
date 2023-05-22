'use strict';
// parseInt
function BinarioADecimal(num) {
   return parseInt(num, 2);
}

function DecimalABinario(num) {
   return num.toString(2);
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
