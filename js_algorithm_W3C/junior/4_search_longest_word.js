/*找到提供的句子中最长的单词，并计算它的长度。

函数的返回值应该是一个数字。*/


function findLongestWord(str) {
	var wordArr = str.split(" ");
	var wordLenghtArr=[];
	var num=0;
	for (var i = 0;i < wordArr.length; i++ ) {
		wordLenghtArr.push(wordArr[i].length);
	}
	for(i=0;i<wordLenghtArr.length;i++){
		if(num<wordLenghtArr[i]){
			num=wordLenghtArr[i];
		}
	}
	return num;
}

findLongestWord("The quick brown fox jumped over the lazy dog");