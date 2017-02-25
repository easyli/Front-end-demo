/*

如果给定的字符串是回文，返回true，反之，返回false。

如果一个字符串忽略标点符号、大小写和空格，正着读和反着读一模一样，那么这个字符串就是palindrome(回文)。

注意你需要去掉字符串多余的标点符号和空格，然后把字符串转化成小写来验证此字符串是否为回文。

输入：函数参数的值可以为"racecar"，"RaceCar"和"race CAR"。

*/


function palindrome(str) {
  // 去掉符号
  var p=/\s+|[,._():/\-]/gi;
  var pstr=str.replace(p,"");
  // 数组反序
  var arr=pstr.split("");
  var restr=arr.reverse();
  //反序后字符串与原字符串比较 
  var newstr="";
  for (var i=0; i<arr.length; i++){
      newstr+=arr[i];
      }
  if(newstr.toLowerCase()==pstr.toLowerCase()){
          return true;
      }
    return false;      
}
palindrome("fye");