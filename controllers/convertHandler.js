/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let num;
    const firstLtrIndex = input.search(/[A-Za-z]/g);
    if (!input) return 'invalid number'; // return early if empty input

    if (firstLtrIndex < 0) {  // if no unit in input
      num = input.trim(); 
    } else {
      num = input.slice(0, firstLtrIndex).trim();
    }

    if (!num) return 1; // default 1 if no num entered

    if (+num === 0) return 'invalid number'; // no zero for num

    if (!num.includes('/')) { // num is not a fraction
      num = +num;
    } else {
      let nums = num.split('/').map(num => num.trim());
      if (nums.length > 2 ) { // no double fractions
        num = 'invalid number';
      } else {
        num = nums[1] === 0 ? 'invalid number' : (+nums[0] / +nums[1]);
      }
    }
    
    return num;
  };
  
  this.getUnit = function(input) {
    let unit;
    const firstLtrIndex = input.search(/[A-Za-z]/g);
    if (!input || firstLtrIndex < 0) return 'invalid unit'; // return early if empty input or no letters found (no units given)
    unit = input.slice(firstLtrIndex).trim();
    
    return unit;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
