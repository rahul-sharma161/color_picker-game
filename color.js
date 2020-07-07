//alert("connected");
// instead of manually allocating color we use colorGenerator()
// var colors = [
//   "rgb(255, 0, 0)",
//   "rgb(255, 255, 0)",
//   "rgb(0, 255, 0)",
//   "rgb(0, 255, 255)",
//   "rgb(0, 0, 255)",
//   "rgb(255, 0, 255)",
// ];

var numSquares = 6;
var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var pick = document.getElementById("pick");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

//selecting easy and hard levels
easyButton.addEventListener("click", function () {
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColor(numSquares);
  pickedColor = pickColor();
  pick.textContent = pickedColor;

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});
hardButton.addEventListener("click", function () {
  hardButton.classList.add("selected");
  easyButton.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColor(numSquares);
  pickedColor = pickColor();
  pick.textContent = pickedColor;

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }
});

//for new colors
resetButton.addEventListener("click", function () {
  //generate new colour
  colors = generateRandomColor(numSquares);
  //pick a random color from array
  pickedColor = pickColor();
  // update the target in the game heading
  pick.textContent = pickedColor;
  //change color of square

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
});

//generating 6 colors for array

function generateRandomColor(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(colorGenerator());
    //console.log(arr[i]);
  }
  return arr;
}

var colors = generateRandomColor(numSquares);

//var pickedColor = pickColor(); updated with below
var pickedColor = pickColor();
console.log(pickedColor);

pick.textContent = pickedColor;

//main loop
for (var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", function () {
    var clickedColor = this.style.background;
    console.log(pickedColor);
    console.log(clickedColor);
    if (clickedColor === pickedColor) {
      changeColor(pickedColor);
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again";
    } else {
      //if ever in loops the element at index dont work use "this" instead,here after click page refreshes and value of i is lost.
      //squares[i].style.background = "#232323";
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again!";
      resetButton.textContent = "New Colors";

      //console.log("no");
    }
  });
}

const changeColor = (pickedColor) => {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = pickedColor;
  }
};
//didnot work
// pickColor = () => {
//   var j = Math.floor(Math.random() * colors.length);
//   return colors[j];
// };
//
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//rgb is fucked up shit
// extra spaces have to be added else it even when both colors are same wont work,dom adds space
function colorGenerator() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
