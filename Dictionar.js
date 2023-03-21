const words = [' '];
function add() {
    const theText = document.getElementById('inputWord');
    words.push(theText.value)
    theText.value = ''
}
function find1() {
    const theWord = document.getElementById('inputWordsToFind');
    let flag = words.indexOf(theWord.value)

    if (flag == -1) {
        document.getElementById('output').innerHTML = theWord.value + ' does not exists'
    } else {
        document.getElementById('output').innerHTML = theWord.value + ' does exist '
    }
    theWord.value = ''
}