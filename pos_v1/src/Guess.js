function Guess(compareNumber,generateAnswer){
  this.compareNumber = compareNumber;
  this.generateAnswer = generateAnswer;
}

Guess.prototype.guess = function (inputs){
  var answer = this.generateAnswer.generate();
  var tips = this.compareNumber.compare(answer,inputs);
  return tips;
};
