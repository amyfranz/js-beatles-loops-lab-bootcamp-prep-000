function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  newArray.length = musicians.length;
  for (var i = 1; i < newArray.length; i++) {
    newArray[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return newArray;
}