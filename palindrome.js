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

console.log(ispalindrome('242'));