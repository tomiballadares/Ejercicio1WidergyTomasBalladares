function FormatString(sentence){
  let result=[];
  let i = 0;
  let j = 0;
  sentence= sentence.toUpperCase();
  while (i < sentence.length) {
    if((sentence.charCodeAt(i)>=65 && sentence.charCodeAt(i)<=90) || (sentence.charCodeAt(i)>=48 && sentence.charCodeAt(i)<=57)
    || (sentence.charCodeAt(i)===32)  || (sentence.charCodeAt(i)===45) ){  
        result[j]=sentence[i];
        j+=1;
    }
      i+=1;
  }
  return result.join(' ');
}
