//TODO: Please write code in this file.
function printInventory (inputs)
{
  var allItems = loadAllItems();
  var buy = [];
  var free = [];
  for (i=0;i<allItems.length;i++){
    buy[i]=0;
    free[i]=0;
  }
  var Pro = loadPromotions();
  for(var i = 0; i < inputs.length;i++){
    for(var j = 0; j < allItems.length;j++){
      if(inputs[i].substring(0,10) === allItems[j].barcode){
        if (inputs[i].length > 10)
        buy[j] = inputs[i].substring(11,inputs[i].length)
      else
        buy[j]++;}

      }
  }
 for(var i = 0; i < Pro.length;i++){
     if (Pro[i].type === "BUY_TWO_GET_ONE_FREE"){
    for (var j = 0;j < allItems.length; j++){
      var Pro_barcodes = Pro[i].barcodes;
      for (var m =0 ;m < Pro_barcodes.length; m++){
        if (Pro_barcodes[m] === allItems[j].barcode)
     free[j] = parseInt(buy[j]/3);


   }
  }

    break;
}
}

    var expectText = "***<没钱赚商店>购物清单***\n";
    var sum = 0;
    var less = 0;
    for (var i = 0;i < allItems.length; i++){

      if (buy[i] > 0){
        var real = buy [i] - free [i];
        expectText += "名称："+allItems[i].name+ "，数量："+ buy[i]+
        allItems[i].unit+ "，单价："+ allItems[i].price.toFixed(2)
        +"(元)，小计："+ (allItems[i].price*real).toFixed(2)+"(元)\n";
        sum += allItems[i].price * real;
      }
    }
    expectText += "----------------------\n挥泪赠送商品：\n";
    for (var j =0;j< allItems.length;j++){
      if (free[j]>0){
        expectText += "名称：" +allItems[j].name+"，数量："
        + free[j]+allItems[j].unit + "\n"
        less+= allItems[j].price * free[j];
      }
    }

    expectText += "----------------------\n";
    expectText += "总计："+(sum).toFixed(2) + "(元)\n";
    expectText += "节省："+ (less).toFixed(2) + "(元)\n";
    expectText += "**********************";

    console.log (expectText);

 }

  inputs = [
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000003-2',
      'ITEM000005',
      'ITEM000005',
      'ITEM000005'
  ];
  printInventory(inputs);

  function loadAllItems() {
      return [
          {
              barcode: 'ITEM000000',
              name: '可口可乐',
              unit: '瓶',
              price: 3.00
          },
          {
              barcode: 'ITEM000001',
              name: '雪碧',
              unit: '瓶',
              price: 3.00
          },
          {
              barcode: 'ITEM000002',
              name: '苹果',
              unit: '斤',
              price: 5.50
          },
          {
              barcode: 'ITEM000003',
              name: '荔枝',
              unit: '斤',
              price: 15.00
          },
          {
              barcode: 'ITEM000004',
              name: '电池',
              unit: '个',
              price: 2.00
          },
          {
              barcode: 'ITEM000005',
              name: '方便面',
              unit: '袋',
              price: 4.50
          }
      ];
  }

  function loadPromotions() {
      return [
          {
              type: 'BUY_TWO_GET_ONE_FREE',
              barcodes: [
                  'ITEM000000',
                  'ITEM000001',
                  'ITEM000005'
              ]
          }
      ]
  }

