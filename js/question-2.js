// Question 2

const apiURL = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=b9e5599f2eee47c28d9200d087a81d21"




function createHTML(results) {
  const facts = results;


  console.log(facts[2].name);
 /*  resultsContainer.innerHTML = "";

      for (let i = 0; i < facts.length; i++) {

          if (i === 10) {
              break;
          }

          resultsContainer.innerHTML += `<div class="result">${facts[i].text}</div>`;
      } */
}

async function callAPI(){

    const response = await fetch(apiURL);
    const result = await response.json();
    const data = result.all;

    createHTML(data);
    console.log(response);


  /*   for (let i = 0; i < 10; i++){

      console.log(data[i].text)

      if(i === 7){
        break;
      }
    } */
}

callAPI();