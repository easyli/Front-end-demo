/*
确保字符串的每个单词首字母都大写，其余部分小写。

像'the'和'of'这样的连接符同理。
*/


//每个单词首字母大写
function toFirstUpper(word){
    return word.substring(0,1).toUpperCase()+word.substring(1).toLowerCase();
}

//句子中的每个单词做同样的操作
function titleCase(str) {
  var wordArr=str.split(" ");
  for (var i=0; i<wordArr.length; i++){
      wordArr[i]=toFirstUpper(wordArr[i]);
  }
  str=wordArr.join(" ");
  return str;
}


titleCase("I'm a little tea pot");