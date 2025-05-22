
// option-1: directly set on the HTML element
// <button onclick="document.body.style.backgroundColor = 'yellow'">Make Yellow</button>

// option-2 : add onclick function on the html element
//IMPORTANT : we will use this
// <button onclick="makeRed()">Make Red</button>
    function makeRed(){
            document.body.style.backgroundColor = 'red'
        }

        // option-3
        // <button id="make-blue">Make Blue</button>
  const makeBlueButton = document.getElementById('make-blue');
    makeBlueButton.onclick = makeBlue

  function makeBlue (){
        document.body.style.backgroundColor = 'blue';
    }

    // option-3 : another 
    //   <button id="make-purple">Make Purple</button>
   const purpleButton = document.getElementById('make-purple');
 purpleButton.onclick = function makePurple (){
    document.body.style.backgroundColor = 'purple'
 }

 //option-4:
 const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)

function makePink (){
   document.body.style.backgroundColor = 'pink'
}

//option-4 another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen (){
    document.body.style.backgroundColor = 'green';
})

//option-4 final
    // we will use this
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})