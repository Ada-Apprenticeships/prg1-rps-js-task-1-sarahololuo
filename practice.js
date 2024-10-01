
function isPalindrome(word) {

    let newWord = word.split('');
    let reverseWord = newWord.reverse().join('');

    if (word === reverseWord) {
        return 'true';
    } else {
        return 'false';
    }

}

console.log(isPalindrome('yippie'));