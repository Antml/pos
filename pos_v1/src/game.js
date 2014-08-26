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
    var digit = '0123456789';
    if(input.length != 4){
        return false;
    }

    if (/^\d+$/.test(input)){
      return false;
    }

    for(var i=0; i<input.length; i++){
        if( digit.search(input.charAt(i)) === -1 ){
            judgeValue = false;
            break;
        }
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
