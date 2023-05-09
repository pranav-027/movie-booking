// Define an array of movies with their details
const movies = [
    {
      title: 'Avengers: Endgame',
      image: './img/movie1.jpg',
      seats: [true, true, true, false, true, true, true, true, true, true],
    },
    {
      title: 'Master',
      image: './img/movie2.jpg',
      seats: [true, false, true, false, true, true, true, true, true, true],
    },
    {
      title: 'Matrix',
      image: './img/movie3.jpg',
      seats: [true, true, true, false, true, false, true, true, true, true],
    },
    {
      title: 'Harry Potter',
      image: './img/movie4.jpg',
      seats: [true, false, true, false, true, false, true, false, true, true],
    },
    {
      title: 'Uncharted',
      image: './img/movie5.jpg',
      seats: [false, false, false, false, false, false, false, false, false, false],
    },
  ];
  
  // Get the movie selection dropdown element
  const movieSelect = document.getElementById('movie-select');
  
  // Get the movie details elements
  const selectedMovieImg = document.getElementById('selected-movie-img');
  const selectedMovieTitle = document.getElementById('selected-movie-title');
  const selectedMovieSeats = document.getElementById('selected-movie-seats');
  
  // Function to update the selected movie details
  function updateMovieDetails() {
    const selectedMovieIndex = movieSelect.selectedIndex;
    const selectedMovie = movies[selectedMovieIndex];
  
    // Update the selected movie image, title, and seats information
    selectedMovieImg.src = selectedMovie.image;
    selectedMovieTitle.textContent = selectedMovie.title;
  
    // Generate the seats HTML based on the availability
    const seatsHTML = selectedMovie.seats
      .map((seat) => `<div class="seat ${seat ? 'available' : 'booked'}"></div>`)
      .join('');
  
    selectedMovieSeats.innerHTML = seatsHTML;
  }
  
  // Event listener for movie selection change
  movieSelect.addEventListener('change', updateMovieDetails);
  
  // Generate the movie options in the dropdown select
  movies.forEach((movie, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = movie.title;
    movieSelect.appendChild(option);
  });
  
  // Initial update of movie details
  updateMovieDtails();


function submitHandler(event) {
    event.preventDefault(); 
  

    const selectedSeats = document.querySelectorAll('.seat.selected');
    if (selectedSeats.length === 0) {
      const errorElement = document.getElementById('error-message');
      errorElement.textContent = 'Please select at least one seat.';
      return; 
    }
}

const seatsBooked = selectedSeats.length;
const totalPrice = seatsBooked * ticketPrice;


const seatsBookedElement = document.getElementById('seats-booked');
seatsBookedElement.textContent = seatsBooked;

const totalPriceElement = document.getElementById('total-price');
totalPriceElement.textContent = totalPrice;

// Get references to the search input, search button, and search results container
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResultsContainer = document.getElementById('search-results');

// Add event listener to the search button
searchButton.addEventListener('click', performSearch);

// Function to perform the search
function performSearch() {
  const searchTerm = searchInput.value.toLowerCase();

  // Clear previous search results
  searchResultsContainer.innerHTML = '';

  // Filter movies based on the search term
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm)
  );

  // Display search results
  if (filteredMovies.length > 0) {
    filteredMovies.forEach(movie => {
      const movieCard = createMovieCard(movie);
      searchResultsContainer.appendChild(movieCard);
    });
  } else {
    const noResultsMessage = document.createElement('p');
    noResultsMessage.textContent = 'No results found.';
    searchResultsContainer.appendChild(noResultsMessage);
  }
}

// Function to create a movie card HTML element
function createMovieCard(movie) {
  const movieCard = document.createElement('div');
  movieCard.classList.add('movie-card');

  const movieImage = document.createElement('img');
  movieImage.src = movie.image;
  movieImage.alt = movie.title;
  movieCard.appendChild(movieImage);

  const movieTitle = document.createElement('h3');
  movieTitle.textContent = movie.title;
  movieCard.appendChild(movieTitle);

  const movieInfo = document.createElement('p');
  movieInfo.textContent = `Available Seats: ${movie.availableSeats}`;
  movieCard.appendChild(movieInfo);

  const bookingForm = document.createElement('div');
  bookingForm.classList.add('booking-form');

  // ... (Add code for creating the seat selection and booking button elements)

  movieCard.appendChild(bookingForm);

  return movieCard;
}
