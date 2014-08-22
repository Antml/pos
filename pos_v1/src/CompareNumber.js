function CompareNumber (){

}

CompareNumber.prototype.compare = function (answer,inputs){
  var total =[0,0];
  var tips ='';
  for (i=0;i<answer.length;i++){
    for (j=0;j<inputs.length;j++)
    {
        if(answer[i]===inputs[j]){
          if (i===j){
            total[0]++;
          }
        else {
          total[1]++;
        }
        }
    }
  }

  tips =total[0]+'A'+total[1]+'B';
  return tips;
    
};
// for (i=0;i<inputs.length;i++){
//   if(answer.indexOf(inputs[i]) < 0){
//     continue;
//   }
// else if(answer.indexOf(inputs[i]) ===i)
//   {
//     total[0]++;
//   }
// else total[1]++;
// }
// }
