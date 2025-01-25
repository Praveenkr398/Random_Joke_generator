let generate = document.querySelector(".generate");
let listen = document.querySelector(".listen");
let joke = document.querySelector(".joke");

let url = "https://hindi-jokes-api.onrender.com/jokes/2?api_key=efec088fd90bcf05a69c91f291bd";  // Hindi Jokes API
// let url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,sexist,explicit&type=single'


let getJoke = () => {
  // console.log("clicked");
  // joke.classList.remove("fade");
  
  fetch(url)
  .then((data) => data.json()) 
   .then((item) => {
    // console.log(item.data[1].jokeContent);
    // joke.innerText = item.joke //  English joke
    joke.innerText = `${item.data[1].jokeContent}`; // for hindi joke
    // joke.classList.add("fade");
  });
};

getJoke()

window.addEventListener("load", getJoke)

generate.addEventListener("click", getJoke);

function speak() {
  const text_speak = new SpeechSynthesisUtterance(joke.innerText);
  text_speak.rate = 1;
  text_speak.volume = 1;
  text_speak.pitch = 1;
  text_speak.lang = "hi-GB";

  window.speechSynthesis.speak(text_speak);
}

listen.addEventListener('click', speak)