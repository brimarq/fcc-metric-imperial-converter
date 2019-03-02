/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      const input = '32L';
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });
    
    test('Decimal Input', function(done) {
      const input = '24.06kg'
      assert.equal(convertHandler.getNum(input), 24.06);
      done();
    });
    
    test('Fractional Input', function(done) {
      const input = '1/2km';
      assert.equal(convertHandler.getNum(input), 0.5);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      const input = '5.4/3lbs';
      assert.equal(convertHandler.getNum(input), 1.8);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      const input = '2/3/2lbs';
      assert.equal(convertHandler.getNum(input), null);
      done();
    });
    
    test('No Numerical Input', function(done) {
      const input = 'kg';
      assert.equal(convertHandler.getNum(input), 1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      const input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      const expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele) {
        assert.include(expect, convertHandler.getUnit(ele));
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      const input = ['mm', 'oz', 'ft', 'wtf', ''];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(ele), null);
      });
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      const input = ['gal','l','mi','km','lbs','kg'];
      const expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      const input = ['gal','l','mi','km','lbs','kg'];
      const expect = ['gallons','litres','miles','kilometers','pounds','kilograms'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      const input = [5, 'gal'];
      const expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      const input = [2, 'l'];
      const expected = 0.5283;
      assert.approximately(convertHandler.convert(input[0] , input[1]), expected, 0.1); //0.1 tolerance
      done();
    });
    
    test('Mi to Km', function(done) {
      const input = [3.5, 'mi'];
      const expected = 5.6327;
      assert.approximately(convertHandler.convert(input[0] , input[1]), expected, 0.1); //0.1 tolerance
      done();
    });
    
    test('Km to Mi', function(done) {
      const input = [0.75, 'km'];
      const expected = 0.4660;
      assert.approximately(convertHandler.convert(input[0] , input[1]), expected, 0.1); //0.1 tolerance
      done();
    });
    
    test('Lbs to Kg', function(done) {
      const input = [110, 'lbs'];
      const expected = 49.8951;
      assert.approximately(convertHandler.convert(input[0] , input[1]), expected, 0.1); //0.1 tolerance
      done();
    });
    
    test('Kg to Lbs', function(done) {
      const input = [80, 'kg'];
      const expected = 176.3696;
      assert.approximately(convertHandler.convert(input[0] , input[1]), expected, 0.1); //0.1 tolerance
      done();
    });
    
  });

});