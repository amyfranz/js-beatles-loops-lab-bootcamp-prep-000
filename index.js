function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  newArray.length = musicians.length;
  for (var i = 0; i < newArray.length; i++) {
    newArray[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return newArray;
}

function johnLennonFacts(arrayFacts){
  var newArray = [];
  var i = 0;
  newArray.length = arrayFacts.length;
  while (i < newArray.length){
    newArray[i] = arrayFacts[i] + '!!!';
    i++;
  }
  return newArray;
}