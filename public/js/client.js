// Asynchronous fetch(): request the JSON array from the new JSON endpoint using fetch().
//fetch(`${window.location.origin}/api/v0/gallery`)
fetch(`${window.location.origin}/api/v0/gallery`)
  .then(function(response) {
    // JSON 'data' returned from server
    //We need to convert it in a Javascript object
    return response.json();
  })
  .then(function(foods) {
    //`data`Javascript
    console.log(foods);
    let outputHTML = '';

    // Loop through `foods` array using `array.forEach()`. 
    // Create an image card for each image and append the `<figure>` card to the `outputHTML` variable.
    foods.forEach(function(food) {
      console.log(food.id);

      outputHTML += 
        `<figure class="card">
          <img src=${food.image_path} alt="${food.title} ${food.description}">
          <figcaption> 
            <h1>[${food.title}]</h1>
            <h2>${food.description}</h2>
            <a href="${food.url}" alt="${food.credit}">${food.credit}</a>
          </figcaption>
        </figure>`;

    });

    //Send output to Dom
    document.querySelector('.gallery').innerHTML = outputHTML;
  })

  .catch(function(error) {
    console.log('Error!');
  });