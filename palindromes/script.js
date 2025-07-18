

const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/

function maxDaysInMonth(month, year) {
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return 31
        case 4: case 6: case 9: case 11:
            return 30
        case 2:
            if ((year % 4 === 0 && year % 100 > 0) || (year % 400 === 0)) {
                return 29
            } else {
                return 28
            }
        default:
            return 0
    }
}






function isValidDate(valueDate) {
    if (!valueDate.match(dateRegex)) {
        return false;
    }
    if (valueDate.match(dateRegex)) {
        const [day, month, year] = valueDate.split('/').map(Number)
        if (month < 1 || month > 12) {
            return false
        }
        if (year <= 999 || year > 9999) {
            return false
        }
        if (day < 1 || day > maxDaysInMonth(month, year)) {
            return false;
        }
        return true


    }

}

console.log(isValidDate("03/04/2001"))
console.log(isValidDate("03/14/2001"))




function isPalindrome(str) {
   const inverse= str.split('').reverse().join('')
   if(str=== inverse){
    return true
   }else{
    return false
   }
}




function isDatePalindrome(valueDate) {
    if (!isValidDate(valueDate)) return false;
    const chaineChiffre = valueDate.split('/').join('');
    return isPalindrome(chaineChiffre);
}

function getNextPalindromes(x) {
    const currentDate = new Date();
    let nextDate = new Date(currentDate);
    let palindrome = []
    while (palindrome.length<x) {
        nextDate.setDate(nextDate.getDate() + 1)
        const dayStr = String(nextDate.getDate()).padStart(2, '0')
        const monthStr = String(nextDate.getMonth() + 1).padStart(2, '0')
        const yearStr = String(nextDate.getFullYear())
        const formatted = `${dayStr}/${monthStr}/${yearStr}`
        if (isDatePalindrome(formatted)) {
                palindrome.push(formatted);
            
        }
    }
    return palindrome
}
console.log("is palaindrome: ",isPalindrome("kayak"))
console.log("is palaindrome: ",isDatePalindrome("11/02/2011"))
console.log("is palaindrome: ",isDatePalindrome("26/12/2000"))
console.log(getNextPalindromes(8))