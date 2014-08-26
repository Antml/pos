function judgeNumber(answer){
  return (/^\d+$/.test(answer));
}


function judgequantity(answer){
  var length = answer.length;
  if (length ===4)
    {

      return true;
    }

    else
      {
        return false;
      }
}
 function judgeDifferent(answer){
   var one = answer[0];
   var two = answer[1];
   var three = answer[2];
   var four = answer[3];
   if (one === two|| one ===three||one ===four||two === three||three === four){
     return false;
   }
 else
   return true;
 }

function judgerandom(answer1,answer2){

   if (answer1 === answer2){
     return false;
   }

     else return true;
 }
