
let word;
let numberOfLetters;
let sendToHtml = new Array(numberOfLetters)

function salveaza() {
   const theText = document.getElementById('input1')
   const valueOfText = new String(theText.value)
   let lenghtOfText = valueOfText.length
   numberOfLetters = lenghtOfText
   word = valueOfText
   let i = 0
   while (lenghtOfText > 0) {
      sendToHtml[i] = ' _'
      --lenghtOfText;
      ++i
   }
   for (let y = 0; y < numberOfLetters; ++y) {
      document.getElementById('secondOutput').innerHTML += sendToHtml[y]
   }
   console.log(valueOfText)
   console.log(lenghtOfText)
   theText.value = ''
   document.getElementById("Button").disabled = true;
   document.getElementById("secondButton").disabled = false;


}

let wrong = 1
let winner = 0;

function compara() {
   document.getElementById('secondOutput').innerHTML = ''
   const letterImput = document.getElementById('input2')
   const letterAsString = letterImput.value
   let numberOfLettersCopy = numberOfLetters
   let j = 0;
   let wrongCounter = 1;
   if (letterImput.value != '') {
      while (numberOfLettersCopy > 0) {
         if (word.charAt(j) != letterAsString.charAt(0) && sendToHtml[j] == undefined) {
            sendToHtml[j] = ' _'

         } else if ((sendToHtml[j] == undefined || sendToHtml[j] == ' _') &&
            word.charAt(j) == letterAsString.charAt(0)) {
            sendToHtml[j] = ' ' + word.charAt(j)
            ++winner
            ++wrongCounter
         }
         ++j
         --numberOfLettersCopy
      }
      
      if (wrongCounter == 1) {
         ++wrong
         console.log(wrong)
         if (wrong == 2) {
            document.getElementById('imagine').src = "spanzuratoarea2.jpg"
         } else if (wrong == 3) {
            document.getElementById('imagine').src = "spanzuratoarea3.jpg"
         } else if (wrong == 4) {
            document.getElementById('imagine').src = "spanzuratoarea4.jpg"
         } else if (wrong == 5) {
            document.getElementById('imagine').src = "spanzuratoarea5.jpg"
         } else if (wrong == 6) {
            document.getElementById('imagine').src = "spanzuratoarea6.jpg"
         } else if (wrong == 7) {
            document.getElementById('imagine').src = "spanzuratoarea7.jpg"
         } else if (wrong == 8) {
            document.getElementById('imagine').src = "spanzuratoarea8.jpg"
         } else if (wrong == 9) {
            document.getElementById('imagine').src = "spanzuratoarea9.jpg"
         } else if (wrong == 10) {
            document.getElementById('imagine').src = "spanzuratoarea10.jpg"
         } else if (wrong == 11) {
            document.getElementById('imagine').src = "spanzuratoarea11.jpg"
         } else if (wrong == 12) {
            document.getElementById('imagine').src = "spanzuratoarea12.jpg"
            document.getElementById('secondOutput').innerHTML = word
            numberOfLetters = -1
            document.getElementById('output').innerHTML = "Ai pierdut la cel mai smecher joc pe care l-ai vazut vreodata \n Cuvantul era-"
            document.getElementById("secondButton").disabled = true;
         }
      }
   }
   if (numberOfLetters == winner) {
      document.getElementById('imagine').src = "castigator.jpg"
      document.getElementById("secondButton").disabled = true;
   }
   for (let y = 0; y < numberOfLetters; ++y) {
      document.getElementById('secondOutput').innerHTML += sendToHtml[y]
   }
   letterImput.value = ''
}
function restart() {
   document.getElementById("Button").disabled = false;
   document.getElementById("secondButton").disabled = false;
   document.getElementById('output').innerHTML = ""
   document.getElementById('secondOutput').innerHTML = ""
   document.getElementById('imagine').src = "spanzuratoarea1.jpg"
   wrong = 1;
   document.getElementById("secondButton").disabled = true;
   winner = 0
}

