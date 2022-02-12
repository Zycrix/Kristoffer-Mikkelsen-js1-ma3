// Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&page=1&key=b9e5599f2eee47c28d9200d087a81d21";
const loader = document.querySelector(".loadingContainer");
const content = document.querySelector(".content");
let toBeDisplayed = 8;
let tagLength;


//Remove loading indicator
function stopLoading() {

  loader.style.display = "none";
  
};


//Create html from the api results
function htmlCreator(data){

  for (let i = 0; i < toBeDisplayed; i++){

    tagLength = data[i].tags.length;

    content.innerHTML += `<div class = "newContentContainer">
      <h2 class = "newContentName">${data[i].name}</h2>
      <h3 class = "newContentRating">Rating: ${data[i].rating}</h3>
      <h4 class = "newContentTags">Number of tags: ${tagLength}</h4>
      </div>`;
  };
};


//API call
async function callAPI(){

  try{

    const response = await fetch(url);
    const result = await response.json();
    const data = result.results;

    stopLoading();
    htmlCreator(data);

  }
  catch(error){

    stopLoading();

    content.classList.add("error");
    content.innerHTML = `<p>An error has occured please try again</p>
    <button class="errorButton">Try again</button>`;

    const errorButton = document.querySelector(".errorButton");

    errorButton.onclick = () => location.reload();

  };
};

callAPI(); 