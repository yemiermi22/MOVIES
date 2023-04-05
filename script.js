<script>
  
    function createCard(title, image, description){
      const card = document.createElement("div");
      
   
      // const imgWrapper = document.createElement("div");
      // imgWrapper.className = "card-img-wrapper";
      // card.appendChild(imgWrapper);

      const img = document.createElement("img");
      img.src = image;
      img.alt = title;
      img.className = "card-img-top";
      imgWrapper.appendChild(img);

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";
      card.appendChild(cardBody);

      const h4 = document.createElement("h4");
      h4.className = "card-title";
      h4.textContent = title;
      cardBody.appendChild(h4);


      }
    function search() {
      const searchInput = document.getElementById("searchBtn").value.trim();
      if (!searchInput) return;

      fetch("https://imdb-api.com/en/API/SearchAll/k_h52f5864/")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const output = document.getElementById("output");
          output.innerHTML = "";
          data.results.forEach((result) => {
            const card = createCard(
              result.title,
              result.image,
              //result.description
            );
            output.appendChild(card);
          });
        })
        .catch((error) => console.error(error));
    }

    function fetchAndDisplay(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const output = document.getElementById("output");
          output.innerHTML = "";
          data.items.forEach((item) => {
            const card = createCard(item.image, item.title);
            output.appendChild(card);
          });
        })
        .catch((error) => console.error(error));
    }
    function DisplayBoxOffice () {
fetchAndDisplay('https://imdb-api.com/API/BoxOffice/k_h52f5864');
}


    function DispalySeasonEpisodes() {
      fetchAndDisplay("https://imdb-api.com/API/SeasonEpisodes/k_h52f5864/string/1");
    }

    function DispalyMostPopularMovies() {
    fetchAndDisplay("https://imdb-api.com/API/MostPopularMovies/k_h52f5864");
  }
  function DispalyYouTubeTrailer() {
    fetchAndDisplay("https://imdb-api.com/API/YouTubeTrailer/k_h52f5864/1")
  }
  //Dispay 
  function fun(id){
  fetch('https://imdb-api.com/en/API/Title/k_12345678/tt1375666')
  
  .then(response =>{
    if(!response.ok){
      throw Error("Error");
    }
      return response.json();
      })
      .then(data=>{
        console.log(data);
        const movie =
     `<div class="movies">
      
      <li><button><img src="${data.image.items}"></button> </li>
      <li><p> ${data.items.description}</p></li>
      <li>name ${data.items.title}</li>
      </div>`;
      
    document.querySelector('#movie').innerHTML+=movie
        
})
}

   

  </script>
