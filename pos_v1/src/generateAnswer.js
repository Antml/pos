function GenerateAnswer(){

}

GenerateAnswer.prototype.generate = function(){
    var answer = '';
    for (i=0;i<4;i++){
    var num=Math.floor(Math.random()*10);

    while (answer.indexOf(num)!==-1){
      num = Math.floor(Math.random()*10);
    }
    answer = answer + num;
  }

    return answer;
};
