function clicks() {
    var getinp = document.getElementById('inp').value
    fetch(`https://newsapi.org/v2/everything?q=${getinp}&from=2024-05-04&sortBy=publishedAt&apiKey=606e5872de6744ef95d0e916a77b9fab`)
        .then(function (data) {
            return data.json()
        })
        .then(function (data) {
            var getdiv = document.getElementById("divs")
            for (var i = 0; i < data.articles.length; i++) {
                getdiv.innerHTML += `<div class="card   d-flex justify-content-center m-1" style="width: 18rem;">
        <img src= ${data.articles[i].urlToImage} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.articles[i].title}</h5>
          <p class="card-text">#${data.articles[i].description}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
            }
        })

        .catch(function (err) {
            console.log(err)
        })
}
