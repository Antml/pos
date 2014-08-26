function Game(guess){
    this.answer;
    this.number;
    this.guess = guess;
}

Game.prototype.start = function start(){

    this.answer = this.guess.generateAnswer.generate();
    this.number = 6;
    return 'Welcome !';
}

Game.prototype.judgeInput = function(input){

    var judgeValue = true;

    if(input.length != 4){
        return false;
    }

    judgeValue = (/^\d+$/.test(input));

    var one = input[0];
    var two = input[1];
    var three = input[2];
    var four = input[3];
    if (one === two|| one ===three||one ===four||two === three||three === four){
      judgeValue = false;
    }

      return judgeValue;
};

Game.prototype.judgeAnswer = function(input){

    var judgeResults = this.guess.guess(input);

    if(this.answer === input){
        return 'Congratulation !';
    }else{
        return judgeResults + ', start next game !';
    }
};

Game.prototype.caculateNumber = function(){

    this.number--;
    if(this.number === 0){
        return 'Game over !';
    }else{
        return this.number;
    }
}
