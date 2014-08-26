describe('', function () {

    var input;
    var generateAnswer;
    var compareNumber;
    var guess;




    beforeEach(function(){
      compareNumber  = new CompareNumber();
      generateAnswer = new GenerateAnswer();


      input = ['1316', '1234', 'a243','34567','2536'];
      spyOn(generateAnswer, "generate").and.returnValue('1234');

      guess = new Guess( compareNumber,generateAnswer);

    });






    it('start the game', function(){
        var guess = new Guess(compareNumber,generateAnswer);
        var game = new Game(guess);
        var welcomeString = game.start();
        expect(generateAnswer.generate.calls.count()).toEqual(1);
        expect(welcomeString).toEqual('Welcome !');
        expect(game.number).toEqual(6);
    });

    it('input isnot repeated', function(){

        var guess = new Guess(compareNumber,generateAnswer);
        var game = new Game(guess);


        var judgeInput_0 = game.judgeInput(input[0]);
        var judgeInput_1 = game.judgeInput(input[1]);

        expect(judgeInput_0).toEqual(false);
        expect(judgeInput_1).toEqual(true);

    });
    it('inputs are digit',function(){
        var guess = new Guess(compareNumber,generateAnswer);
        var game = new Game(guess);


        var judgeInput_2 = game.judgeInput(input[2]);
        expect(judgeInput_2).toEqual(false);
    });
    it('the length of input is 4',function(){
        var guess = new Guess(compareNumber,generateAnswer);
        var game = new Game(guess);


        var judegInput_3 = game.judgeInput(input[3]);
        expect(judegInput_3).toEqual(false);
    });


    it('input is equal to answer', function(){

        var guess = new Guess(compareNumber,generateAnswer);
        var game = new Game(guess);


        var answerString = game.judgeAnswer(input[1]);

        expect(answerString).toEqual('Congratulation !');

    });

    it('input is not equal to answer', function(){

        spyOn(resultString_right, "compare").and.returnValue('1A1B');
        var guess = new Guess(compareNumber,generateAnswer);
        var game = new Game(guess);


        var answerString = game.judgeAnswer(input[4]);

        expect(answerString).toBe('1A1B' + ', start next game !');

    });

    it('number  is ok', function(){

        var guess = new Guess(compareNumber,generateAnswer);
        var game = new Game(guess);

        var number5 = game.caculateNumber();
        var number4 = game.caculateNumber();
        var number3 = game.caculateNumber();
        var number2 = game.caculateNumber();
        var number1 = game.caculateNumber();
        var number0 = game.caculateNumber();

        expect(number5).toEqual(5);
        expect(number4).toEqual(4);

        expect(number0).toEqual('Game over !');
    });

})
