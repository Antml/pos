describe('', function () {

    var input;
    var generateAnswer;
    var compareNumber;
    var guess;

var result = new CompareNumber();

var guess_right = new Guess(generateAnswer, result);
input = ['1316', '1234', 'a243','34567','2536'];

generateAnswer = new GenerateAnswer();
spyOn(generateAnswer, "generate").and.returnValue('1234');

var result = new CompareNumber();

var guess_right = new Guess(generateAnswer, result);



    beforeEach(function(){

        input = ['1316', '1234', 'a243','34567','2536'];

        generateAnswer = new GenerateAnswer();
        spyOn(generateAnswer, "generate").and.returnValue('1234');

        var result = new CompareNumber();

        var guess_right = new Guess(generateAnswer, result);

    });






    it('start the game', function(){
        var guess_right = new Guess(generateAnswer, result);
        var game = new Game(guess_right);
        var welcomeString = game.start();

        expect(generateAnswer.generate.calls.count()).toEqual(1);
        expect(welcomeString).toEqual('Welcome !');
        expect(game.number).toEqual(6);
    });

    it('input isnot repeated', function(){

        var game = new Game(guess_right);


        var judgeInput_0 = game.judgeInput(input[0]);
        var judgeInput_1 = game.judgeInput(input[1]);

        expect(judgeInput_0).toEqual(false);
        expect(judgeInput_1).toEqual(true);

    });
    it('inputs are digit',function(){
        var game = new Game(guess_right);


        var judgeInput_2 = game.judgeInput(input[2]);
        expect(judgeInput_2).toEqual(false);
    });
    it('the length of input is 4',function(){
        var game = new Game(guess_right);


        var judegInput_3 = game.judgeInput(input[3]);
        expect(judegInput_3).toEqual(false);
    });


    it('input is equal to answer', function(){

        var game = new Game(guess_right);


        var answerString = game.judgeAnswer(input[1]);

        expect(answerString).toEqual('Congratulation !');

    });

    it('input is not equal to answer', function(){
        spyOn(resultString_right, "compare").and.returnValue('1A1B');
        var game = new Game(guess_right);


        var answerString = game.judgeAnswer(input[4]);

        expect(answerString).toBe('1A1B' + ', start next game !');

    });

    it('number modify is ok', function(){

        var game = new Game(guess_right);

        var number_5 = game.caculateNumber();
        var number_4 = game.caculateNumber();
        var number_3 = game.caculateNumber();
        var number_2 = game.caculateNumber();
        var number_1 = game.caculateNumber();
        var number_0 = game.caculateNumber();

        expect(number_5).toEqual(5);
        expect(number_4).toEqual(4);

        expect(number_0).toEqual('Game over !');
    });

})
