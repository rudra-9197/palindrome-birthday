function reverseStr(str) {
    var listofChars =str.split('');
    var reverseListofChars= listofChars.reverse();
    var reversedListofChars = reverseListofChars.join('');
    return reversedListofChars;
}

function isPalindrome(str){

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

function getAllDateForms(date){

var dateStr = convertDateToStr(date);

var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
var ddmmyy = dateStr.day + dateStr.month +dateStr.year.slice(-2);
var mmddyy = dateStr.month+dateStr.day+dateStr.year.slice(-2);
var yymmdd =dateStr.year.slice(-2)+dateStr.month+dateStr.day;

return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];
}

function checkPalindromeForAllDateFormats(date){
var listOfPalindromes = getAllDateForms(date);

var flag = false;
for (var i=0; i< listOfPalindromes.length;i++){
    if(isPalindrome(listOfPalindromes[i])){
        flag = true;
        break;
    }
    
}
return flag;
    
}
function isLeapYear(year){
if(year%400===0){
    return true;
}
if(year%100===0){
return true;
}
if (year%4 ==0){
    return true;
}
return false;
}

function getNextDate(date){

    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

    if(month===2){

        if(isLeapYear(year)){
            if(day>29){
                day=1;
                month++;
            }
        }
            else{
                if(day>28){
                    day =1;
                    month++;
                }
            }
        }

    
    else {
        if(day > daysInMonth[month-1]){
            day = 1;
            month++;

        }
    }
if(month>12){
    month=1;
    year++;

}
return{
    day: day,
    month: month,
    year: year
}

}

function getNextPalindromeDate(date){

    var ctr =0;
    var nextDate = getNextDate(date);

    while(1){
ctr++;
var isPalindrome = checkPalindromeForAllDateFormats(nextDate);
if(isPalindrome){
    break;
}
nextDate =getNextDate(nextDate);
    }
return [ctr, nextDate];
}

var birthDate = document.querySelector("#birth-date");
var checkButton = document.querySelector("#show-button");
var output = document.querySelector("#output-ans");

function dateArray(){

 var dateA = birthDate.value.split('-');
 var date = {
     day :Number( dateA[2]),
     month : Number( dateA[1]),
     year : Number(dateA[0])
 };
 
 var isPalindrome = checkPalindromeForAllDateFormats(date);

 if (isPalindrome){
    output.innerText ="yup!!...yours is a palindrome"
 }
else {
    var [ctr, nextDate]=getNextPalindromeDate(date);
    output.innerText = " you missed it by "+ ctr + " days" + " next palindrome date is " + nextDate.day + "-"+nextDate.month+"-"+nextDate.year

   
}

}
checkButton.addEventListener('click',dateArray)

