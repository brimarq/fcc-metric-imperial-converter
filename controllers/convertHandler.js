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

    if (!input) return null; // return early if empty input

    if (firstLtrIndex < 0) {  // if no unit in input
      num = input.trim(); 
    } else {
      num = input.slice(0, firstLtrIndex).trim();
    }

    if (!num) return 1; // default 1 if no num entered

    if (!num.includes('/')) { // num is not a fraction
      num = +num;
    } else {
      let nums = num.split('/').map(num => num.trim());
      if (nums.length > 2 ) { // no double fractions
        num = null;
      } else {
        num = nums[1] === 0 ? null : (+nums[0] / +nums[1]);
      }
    }
    
    return num;
  };
  
  this.getUnit = function(input) {
    let unit;
    const firstLtrIndex = input.search(/[A-Za-z]/g);
    const validUnits = ['l','gal','km','mi','kg','lbs'];

    if (!input || firstLtrIndex < 0) return null; // return early if empty input or no letters found (no units given)
    unit = input.slice(firstLtrIndex).trim().toLowerCase();
    if (!validUnits.includes(unit)) return null; // return early if invalid unit
    
    return unit;
  };
  
  this.getReturnUnit = function(initUnit) {
    const retUnitFor = {
      gal: 'l',
      l: 'gal',
      mi: 'km',
      km: 'mi',
      lbs: 'kg',
      kg: 'lbs'
    };
    return retUnitFor[initUnit];
  };

  this.spellOutUnit = function(unit) {
    const wordFor = {
      gal: 'gallons',
      l: 'litres',
      mi: 'miles',
      km: 'kilometers',
      lbs: 'pounds',
      kg: 'kilograms'
    };
    
    return wordFor[unit];
  };
  
  this.convert = function(initNum, initUnit) {

    const factorFor = {
      gal: 3.78541, // l per gal
      l: 0.264172, // gal per l
      mi: 1.60934, // km per mi
      km: 0.621371, // mi per km
      lbs: 0.453592, // kg per lb
      kg: 2.20462 // lbs per kg
    };
    
    return initNum * factorFor[initUnit];
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    const initUnitName = this.spellOutUnit(initUnit);
    const returnUnitName = this.spellOutUnit(returnUnit);
    return initNum + ' ' + initUnitName + ' converts to ' + returnNum + ' ' + returnUnitName;
  };
  
}

module.exports = ConvertHandler;
