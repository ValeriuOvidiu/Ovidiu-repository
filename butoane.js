function createf() {
  let a = 0;
  var num = prompt("numarul de butoane ")
  var num2 = prompt("butonul castigator ")
  for (let i = 1; i <= num; ++i) {
    a += i;
    var button = document.createElement("button");
    button.innerHTML = "Push " + i;
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);
    if (i == num2) {
      button.addEventListener("click", function () {
        alert("ai apasat butonul castigator");
      });
    } else {
      button.addEventListener("click", function () {
        alert("mai incearca");
      });
    }
  }
}
