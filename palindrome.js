function reverseStr(str) {
    var listofChars =str.split('');
    var reverseListofChars= listofChars.reverse();
    var reversedListofChars = reverseListofChars.join('');
    return reversedListofChars;
}

function ispalindrome(str){

var reverse = reverseStr(str);
if (str===reverse){
    return true;
}
return false;
}

function convertDateToStr(date){
  var dateStr ={day: '', month: '', year: ''};
  if (date.day<10)
  {
      dateStr.day = '0'+date.day;
    
  }
else{
    dateStr.day = date.day.toString();
}
if(date.month<10){
    dateStr.month= '0'+date.month;

}
else{

    dateStr.month = date.month.toString();

}
dateStr.year=date.year.toString();

return dateStr;
}

var date= {
    day: 1,
    month: 22,
    year: 2021
   
}


  
