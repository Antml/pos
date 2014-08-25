describe('', function () {

    var inputs;
    var answer;

    beforeEach(function () {

        inputs = '1345';



        });


    it('should return correct data', function () {

      var  generateAnswer = new GenerateAnswer();

      spyOn(generateAnswer, 'generate').and.returnValue('3456');

      var compareNumber = new CompareNumber();
      spyOn(compareNumber,'compare').and.returnValue('0A3B');
      var text = compareNumber.compare(generateAnswer.generate(), inputs);
      // var text = compareNumber.compare(generateAnswer.generate(),inputs);

      var guess = new Guess(compareNumber, generateAnswer);
      var tips = guess.guess(inputs);


      expect(tips).toBe(text);

      expect(compareNumber.compare).toHaveBeenCalledWith(generateAnswer.generate(),inputs)

    });
})
