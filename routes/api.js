/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      const input = req.query.input;
      const initNum = convertHandler.getNum(input);
      const initUnit = convertHandler.getUnit(input);
      let returnNum, returnUnit, toString;

      // Handle null values to send error responses early
      if (!initNum || !initUnit) {
        const errMessage = !initNum && !initUnit 
          ? 'invalid number and unit' 
          : !initNum ? 'invalid number' : 'invalid unit'
        ;
        return res.status(400).json({error: errMessage});
      } else {
        returnNum = convertHandler.convert(initNum, initUnit);
        returnUnit = convertHandler.getReturnUnit(initUnit);
        toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      }
      
      res.send({initNum, initUnit, returnNum, returnUnit, string: toString});
    });
    
};
