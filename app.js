const link = document.querySelector('#my-classroom');
link.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("wow! we didn't navigate to new page!!");
})
//create new div element
const myCusomDiv = document.createComment('div');

function respondToTheClick() {
    console.log('A paragraph was clicked.');
}
for (i = 1; i <= 200; i++) {
    const newElement = document.createComment('p');
    newElement.textContent = 'This paragraph number' +i;
    myCusomDiv.appendChild(newElement);
    
    }
    
myCusomDiv.addEventListener('click', respondToTheClick);
document.body.appendChild(myCusomDiv);
*/
// Function to create and style favorite buttons

function addFavoriteButtons() {
    // Select all Nanodegree cards
    const cards = document.querySelectorAll('.nanodegree-card');
  
    // Iterate through each card
    cards.forEach(card => {
      // Create the button
      const button = document.createElement('button');
      button.classList.add('favorite-button');
      button.textContent = 'Add to Favorites';
  
      // Style the button
      button.style.padding = '10px';
      button.style.backgroundColor = '#007bff';
      button.style.color = 'white';
      button.style.border = 'none';
      button.style.borderRadius = '5px';
      button.style.cursor = 'pointer';
  
      // Append the button to the card
      card.appendChild(button);
    });
  }


document.querySelector('.list-nanodegrees').addEventListener('click', function (event) {
    if (event.target.classList.contains('favorite-button')) {
      toggleFavorite(event.target);
      event.preventDefault();
    }
  });

  function toggleFavorite(button) {
    const card = button.closest('.nanodegree-card');
    if (button.classList.contains('favorite')) {
      button.textContent = 'Add to Favorites';
      button.classList.remove('favorite');
      card.querySelector('.favorite-indicator')?.remove();
    } else {
      button.textContent = 'Remove from Favorites';
      button.classList.add('favorite');

      const starIndicator = document.createElement('div');
      starIndicator.textContent = '⭐ ⭐ ⭐';
      starIndicator.className = 'favorite-indicator';
      card.appendChild(starIndicator);
    }
  }