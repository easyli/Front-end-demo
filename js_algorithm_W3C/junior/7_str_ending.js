/*
检查一个字符串(str)是否以指定的字符串(target)结尾。

如果是，返回true;如果不是，返回false。

*/


function confirmEnding(str, target) {
  var targetLength=target.length;
  var strEnd=str.substr(str.length-targetLength);
  if(strEnd==target){
    return true;
  }
  return false;
}