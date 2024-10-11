
function isPalindrome(word) {

    let newWord = word.split('');
    let reverseWord = newWord.reverse().join('');

   return (word === reverseWord) ? 'true' : 'false'

}
