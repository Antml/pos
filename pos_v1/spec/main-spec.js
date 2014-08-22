
describe('',function(){
  var answer;
  var inputs;
var expectText;

  beforeEach (function(){
    answer = ['1','2','3','4'];
    inputs = [['4','3','2','1'],['1','2','4','3'],['1','2','3','4'],['5','6','7','8']]
  expectText= ['0A4B','2A2B','4A0B','0A0B'];
  });

  it ('should return same string',function(){


      var comparenumber = new CompareNumber();
      var tips = comparenumber.compare(answer,inputs[0]);

      expect(tips).toBe(expectText[0]);

  });
  it ('should return same string',function(){


      var comparenumber = new CompareNumber();
      var tips = comparenumber.compare(answer,inputs[1]);

      expect(tips).toBe(expectText[1]);

  });
  it ('should return same string',function(){


      var comparenumber = new CompareNumber();
      var tips = comparenumber.compare(answer,inputs[2]);

      expect(tips).toBe(expectText[2]);

  });
  it ('should return same string',function(){


      var comparenumber = new CompareNumber();
      var tips = comparenumber.compare(answer,inputs[3]);

      expect(tips).toBe(expectText[3]);

  });

})
