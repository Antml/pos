describe('', function () {

    var inputs;

    beforeEach(function () {

        inputs = '1345';



        });


    it('should return correct data', function () {
      
      var  generateAnswer = new GenerateAnswer();
      spyOn(generateAnswer, 'generate').and.returnValue('1234');

      var compareNumber = new CompareNumber();
      var text = compareNumber.compare(generateAnswer.generate(),inputs);

      var guess = new Guess(compareNumber, generateAnswer);
      var tips = guess.guess(inputs);


      expect(tips).toBe(text);

    });
})
