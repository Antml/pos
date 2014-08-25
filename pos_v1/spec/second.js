describe('',function(){
  var answer;

beforeEach(function () {



    });

  it ('should return number',function(){

    var generateAnswer = new GenerateAnswer();
    console.log(generateAnswer);
    answer = generateAnswer.generate();
    var tips= judgeNumber(answer) ;

    expect(tips).toBe(true);

  });

  it ('should return different',function(){

    var generateAnswer = new GenerateAnswer();
    console.log(generateAnswer);
    answer = generateAnswer.generate();
    var tips= judgeDifferent(answer) ;

    expect(tips).toBe(true);

  });

  it ('should return random',function(){

    var generateAnswer = new GenerateAnswer();
    console.log(generateAnswer);
    answer = generateAnswer.generate();
    var tips= judgerandom(answer) ;
    expect(tips).toBe(true);

  });

  it ('should return rightquantiy',function(){
    var generateAnswer = new GenerateAnswer();
    console.log(generateAnswer);

    answer = generateAnswer.generate()
    var tips= judgequantity(answer) ;

    expect(tips).toBe(true);


  });

})
