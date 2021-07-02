"use strict";
import * as generalFunctions from "./generalFunctions.js";

//////////////////////////////////////////////////////////
///// VARIBLES

const year = document.querySelector("#year");
const searchInput = document.querySelector(".search__input");
const colorPrimary = "--color-primary";
const colorPrimaryLight = "--color-primary-light";
const colorPrimaryDark = "--color-primary-dark";

// Navigation
const hotel = document.querySelector(".hotel");
const flight = document.querySelector(".flight");
const carRental = document.querySelector(".car-rental");
const tours = document.querySelector(".tours");

const overviewHeading = document.querySelector(".overview__heading");

const galleryPhoto1 = document.querySelector(".gallery__photo-1");
const galleryPhoto2 = document.querySelector(".gallery__photo-2");
const galleryPhoto3 = document.querySelector(".gallery__photo-3");

const locationText = document.querySelector(".btn-inline-text");
const averageRating = document.querySelector(".overview__rating-average");
const averageVotes = document.querySelector(".overview__rating-count");

const paragraph1 = document.querySelector(".paragraph-1");
const paragraph2 = document.querySelector(".paragraph-2");

const listItem1 = document.querySelector(".list__item-1");
const listItem2 = document.querySelector(".list__item-2");
const listItem3 = document.querySelector(".list__item-3");
const listItem4 = document.querySelector(".list__item-4");
const listItem5 = document.querySelector(".list__item-5");
const listItem6 = document.querySelector(".list__item-6");
const listItem7 = document.querySelector(".list__item-7");
const listItem8 = document.querySelector(".list__item-8");

const recommend = document.querySelector(".recommend__count");
const recommender1 = document.querySelector(".recommend__photo-1");
const recommender2 = document.querySelector(".recommend__photo-2");
const recommender3 = document.querySelector(".recommend__photo-3");
const recommender4 = document.querySelector(".recommend__photo-4");
const recommender5 = document.querySelector(".recommend__photo-5");
const recommender6 = document.querySelector(".recommend__photo-6");
const recommender7 = document.querySelector(".recommend__photo-7");
const recommender8 = document.querySelector(".recommend__photo-8");
const recommender9 = document.querySelector(".recommend__photo-9");
const recommender10 = document.querySelector(".recommend__photo-10");

const info = document.querySelector(".cta__book-now");
const infoButton = document.querySelector(".btn__invisible");

const reviewer1 = document.querySelector(".review__user-name-1");
const reviewer2 = document.querySelector(".review__user-name-2");
const reviewe1Text = document.querySelector(".review__text-1");
const reviewe2Text = document.querySelector(".review__text-2");
const reviewe1Photo = document.querySelector(".review__photo-1");
const reviewe2Photo = document.querySelector(".review__photo-2");
const reviewer1Date = document.querySelector(".review__user-date-1");
const reviewer2Date = document.querySelector(".review__user-date-2");
const reviewer1Rating = document.querySelector(".review__rating-1");
const reviewer2Rating = document.querySelector(".review__rating-2");

//////////////////////////////////////////////////////////
///// FUNCTIONS

const displayHotels = () => {
  generalFunctions.removeActiveNav(flight);
  generalFunctions.removeActiveNav(carRental);
  generalFunctions.removeActiveNav(tours);
  generalFunctions.addActiveNav(hotel);

  searchInput.placeholder = "Search hotels";

  generalFunctions.changeImage(galleryPhoto1, "../img/hotel-1.jpg");
  generalFunctions.changeImage(galleryPhoto2, "../img/hotel-2.jpg");
  generalFunctions.changeImage(galleryPhoto3, "../img/hotel-3.jpg");

  generalFunctions.changeText(overviewHeading, "Hotel Isonia");
  generalFunctions.changeText(locationText, "Irpen, Ukraine");
  generalFunctions.changeText(averageRating, "9.0");
  generalFunctions.changeText(averageVotes, "503 votes");
  generalFunctions.changeText(reviewer1, "Anu Ojo");
  generalFunctions.changeText(
    reviewe1Text,
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex."
  );
  generalFunctions.changeImage(reviewe1Photo, "../img/user-7.jpg");
  generalFunctions.changeText(reviewer1Date, "20 Sep 2020");
  generalFunctions.changeText(reviewer1Rating, "8.2");
  generalFunctions.changeText(reviewer2, "Sarah Collins");
  generalFunctions.changeText(
    reviewe2Text,
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi."
  );
  generalFunctions.changeImage(reviewe2Photo, "../img/user-2.jpg");
  generalFunctions.changeText(reviewer2Date, "07 Mar 2021");
  generalFunctions.changeText(reviewer2Rating, "8.7");

  generalFunctions.changeRootBgColor(colorPrimary, "#0c7a36");
  generalFunctions.changeRootBgColor(colorPrimaryLight, "#4db474");
  generalFunctions.changeRootBgColor(colorPrimaryDark, "#065c27");

  generalFunctions.changeText(
    paragraph1,
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate."
  );
  generalFunctions.changeText(
    paragraph2,
    "Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam."
  );

  generalFunctions.changeText(listItem1, "Close to the beach");
  generalFunctions.changeText(listItem2, "Breakfast included");
  generalFunctions.changeText(listItem3, "Free airport shuttle");
  generalFunctions.changeText(listItem4, "Free WiFi in all rooms");
  generalFunctions.changeText(listItem5, "Air conditioning and heating");
  generalFunctions.changeText(listItem6, "Pets allowed");
  listItem7.classList.remove("hidden");
  listItem8.classList.remove("hidden");

  generalFunctions.changeText(recommend, "Anu and 5 other friends recommend this hotel.");
  generalFunctions.changeImage(recommender1, "../img/user-10.jpeg");
  generalFunctions.changeImage(recommender2, "../img/user-4.jpg");
  generalFunctions.changeImage(recommender3, "../img/user-9.jpg");
  generalFunctions.changeImage(recommender4, "../img/user-5.jpg");
  generalFunctions.changeImage(recommender5, "../img/user-6.jpg");
  generalFunctions.changeImage(recommender6, "../img/user-8.jpg");
  recommender7.classList.add("hidden");
  recommender8.classList.add("hidden");
  recommender9.classList.add("hidden");
  recommender10.classList.add("hidden");

  generalFunctions.changeText(info, "Good news! We have 5 free rooms for your selected dates!");
  generalFunctions.changeText(infoButton, "Only 5 rooms left");
};

const displayFlights = () => {
  generalFunctions.removeActiveNav(hotel);
  generalFunctions.removeActiveNav(carRental);
  generalFunctions.removeActiveNav(tours);
  generalFunctions.addActiveNav(flight);

  searchInput.placeholder = "Search flights";

  generalFunctions.changeImage(galleryPhoto1, "../img/flight1.png");
  generalFunctions.changeImage(galleryPhoto2, "../img/flight2.png");
  generalFunctions.changeImage(galleryPhoto3, "../img/flight1.jpg");

  generalFunctions.changeText(overviewHeading, "Flight Isonia");
  generalFunctions.changeText(locationText, "Boryspil Kiev, Ukraine");
  generalFunctions.changeText(averageRating, "9.5");
  generalFunctions.changeText(averageVotes, "701 votes");
  generalFunctions.changeText(reviewer1, "Vladimir Victorovich");
  generalFunctions.changeText(
    reviewe1Text,
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi."
  );
  generalFunctions.changeImage(reviewe1Photo, "../img/user-5.jpg");
  generalFunctions.changeText(reviewer1Date, "15 Jun 2020");
  generalFunctions.changeText(reviewer1Rating, "9.0");
  generalFunctions.changeText(reviewer2, "Moyo Myles");
  generalFunctions.changeText(
    reviewe2Text,
    "Adipisicing elit. Fuga doloremque architecto dicta animi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi. adipisicing elit. Fuga doloremque architecto dicta animi."
  );
  generalFunctions.changeImage(reviewe2Photo, "../img/flightRecommender6.jpg");
  generalFunctions.changeText(reviewer2Date, "21 Apr 2021");
  generalFunctions.changeText(reviewer2Rating, "8.7");

  generalFunctions.changeRootBgColor(colorPrimary, "#DF451F");
  generalFunctions.changeRootBgColor(colorPrimaryLight, "#F0603D");
  generalFunctions.changeRootBgColor(colorPrimaryDark, "#BC240F");

  generalFunctions.changeText(
    paragraph1,
    "Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate."
  );
  generalFunctions.changeText(
    paragraph2,
    "Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate. Animi nisi dignissimos debitis ratione sapiente saepe."
  );

  generalFunctions.changeText(listItem1, "Public transportation between airport and city");
  generalFunctions.changeText(listItem2, "Good, affordable restaurants");
  generalFunctions.changeText(listItem3, "Free wireless Internet");
  generalFunctions.changeText(listItem4, "Time management tools");
  generalFunctions.changeText(listItem5, "A distinctive sense of the local");
  generalFunctions.changeText(listItem6, "Scale");
  listItem7.classList.add("hidden");
  listItem8.classList.add("hidden");

  generalFunctions.changeText(recommend, "Lynda and 10 other friends recommend these flights.");
  generalFunctions.changeImage(recommender1, "../img/flightRecommender1.jpeg");
  generalFunctions.changeImage(recommender2, "../img/flightRecommender2.jpg");
  generalFunctions.changeImage(recommender3, "../img/flightRecommender3.jpg");
  generalFunctions.changeImage(recommender4, "../img/flightRecommender4.jpg");
  generalFunctions.changeImage(recommender5, "../img/flightRecommender5.jpg");
  generalFunctions.changeImage(recommender6, "../img/flightRecommender6.jpg");

  recommender7.classList.remove("hidden");
  recommender8.classList.remove("hidden");
  recommender9.classList.remove("hidden");
  recommender10.classList.remove("hidden");

  generalFunctions.changeImage(recommender7, "../img/flightRecommender7.jpg");
  generalFunctions.changeImage(recommender8, "../img/flightRecommender8.jpg");
  generalFunctions.changeImage(recommender9, "../img/flightRecommender9.jpg");
  generalFunctions.changeImage(recommender10, "../img/flightRecommender10.jpg");

  generalFunctions.changeText(info, "Good news! We have 10 free seats for your selected dates!");
  generalFunctions.changeText(infoButton, "Only 10 seats left");
};

const displayCars = () => {
  generalFunctions.removeActiveNav(hotel);
  generalFunctions.removeActiveNav(flight);
  generalFunctions.removeActiveNav(tours);
  generalFunctions.addActiveNav(carRental);

  searchInput.placeholder = "Search cars";

  generalFunctions.changeImage(galleryPhoto1, "../img/car1.jpg");
  generalFunctions.changeImage(galleryPhoto2, "../img/car3.jpg");
  generalFunctions.changeImage(galleryPhoto3, "../img/car2.jpg");

  generalFunctions.changeText(overviewHeading, "Car Rental Isonia");
  generalFunctions.changeText(locationText, "Solomianska Kiev, Ukraine");
  generalFunctions.changeText(averageRating, "8.9");
  generalFunctions.changeText(averageVotes, "859 votes");
  generalFunctions.changeText(reviewer1, "Agnes Manzyki");
  generalFunctions.changeText(
    reviewe1Text,
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi. Architecto dicta animi. adipisicing elit. Fuga doloremque architecto dicta."
  );
  generalFunctions.changeImage(reviewe1Photo, "../img/flightRecommender7.jpg");
  generalFunctions.changeText(reviewer1Date, "02 Jan 2019");
  generalFunctions.changeText(reviewer1Rating, "9.1");
  generalFunctions.changeText(reviewer2, "Moses Duke");
  generalFunctions.changeText(
    reviewe2Text,
    "Fuga doloremque architecto dicta animi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi. adipisicing elit."
  );
  generalFunctions.changeImage(reviewe2Photo, "../img/user-3.jpg");
  generalFunctions.changeText(reviewer2Date, "06 May 2021");
  generalFunctions.changeText(reviewer2Rating, "9.6");

  generalFunctions.changeRootBgColor(colorPrimary, "#2268CD");
  generalFunctions.changeRootBgColor(colorPrimaryLight, "#5595F3");
  generalFunctions.changeRootBgColor(colorPrimaryDark, "#1321B0");

  generalFunctions.changeText(
    paragraph1,
    "Fuga doloremque architecto dicta animi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi. adipisicing elit."
  );
  generalFunctions.changeText(
    paragraph2,
    "Dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi. adipisicing elit."
  );

  generalFunctions.changeText(listItem1, "Affordable Prices");
  generalFunctions.changeText(listItem2, "Good Service");
  generalFunctions.changeText(listItem3, "Convenient Vehicle Pickup");
  generalFunctions.changeText(listItem4, "Insurance");
  generalFunctions.changeText(listItem5, "Comfortable seats");
  generalFunctions.changeText(listItem6, "Good Vehicle Variety and Condition");
  listItem7.classList.remove("hidden");
  listItem8.classList.remove("hidden");

  generalFunctions.changeText(recommend, "Moses and 8 other friends recommend these cars.");
  generalFunctions.changeImage(recommender1, "../img/user-3.jpg");
  generalFunctions.changeImage(recommender2, "../img/flightRecommender2.jpg");
  generalFunctions.changeImage(recommender3, "../img/flightRecommender3.jpg");
  generalFunctions.changeImage(recommender4, "../img/flightRecommender4.jpg");
  generalFunctions.changeImage(recommender5, "../img/flightRecommender5.jpg");
  generalFunctions.changeImage(recommender6, "../img/flightRecommender6.jpg");

  recommender7.classList.remove("hidden");
  recommender8.classList.remove("hidden");
  recommender9.classList.add("hidden");
  recommender10.classList.add("hidden");

  generalFunctions.changeImage(recommender7, "../img/user-1.jpg");
  generalFunctions.changeImage(recommender8, "../img/user-7.jpg");

  generalFunctions.changeText(info, "Good news! We have 7 free cars for your selected dates!");
  generalFunctions.changeText(infoButton, "Only 7 cars left");
};

const displayTours = () => {
  generalFunctions.removeActiveNav(hotel);
  generalFunctions.removeActiveNav(flight);
  generalFunctions.removeActiveNav(carRental);
  generalFunctions.addActiveNav(tours);

  searchInput.placeholder = "Search tours";

  generalFunctions.changeImage(galleryPhoto1, "../img/tour1.jpg");
  generalFunctions.changeImage(galleryPhoto2, "../img/tour2.jpg");
  generalFunctions.changeImage(galleryPhoto3, "../img/tour3.jpg");

  generalFunctions.changeText(overviewHeading, "Tour Isonia");
  generalFunctions.changeText(locationText, "Kivska Irpen, Ukraine");
  generalFunctions.changeText(averageRating, "8.5");
  generalFunctions.changeText(averageVotes, "497 votes");
  generalFunctions.changeText(reviewer1, "Mikail Petrovich");
  generalFunctions.changeText(
    reviewe1Text,
    "Consectetur adipisicing elit. Fuga doloremque architecto dicta animi. Architecto dicta animi. adipisicing elit."
  );
  generalFunctions.changeImage(reviewe1Photo, "../img/flightRecommender4.jpg");
  generalFunctions.changeText(reviewer1Date, "10 Feb 2020");
  generalFunctions.changeText(reviewer1Rating, "8.4");
  generalFunctions.changeText(reviewer2, "Lawrence Wanton");
  generalFunctions.changeText(
    reviewe2Text,
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi. adipisicing elit."
  );
  generalFunctions.changeImage(reviewe2Photo, "../img/flightRecommender10.jpg");
  generalFunctions.changeText(reviewer2Date, "24 Mar 2021");
  generalFunctions.changeText(reviewer2Rating, "8.6");

  generalFunctions.changeRootBgColor(colorPrimary, "#C4A81B");
  generalFunctions.changeRootBgColor(colorPrimaryLight, "#F4D747");
  generalFunctions.changeRootBgColor(colorPrimaryDark, "#A9851D");

  generalFunctions.changeText(
    paragraph1,
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi. adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi. adipisicing elit."
  );
  generalFunctions.changeText(
    paragraph2,
    "Sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi. adipisicing elit. Fuga doloremque architecto dicta animi. adipisicing elit."
  );

  generalFunctions.changeText(listItem1, "Perception Expression Sea Kayak");
  generalFunctions.changeText(listItem2, "Good, affordable restaurants");
  generalFunctions.changeText(listItem3, "Eddyline Rio 11’9” Sea Kayak");
  generalFunctions.changeText(listItem4, "Wilderness Systems Tsunami");
  generalFunctions.changeText(listItem5, "Comfortable seats");
  generalFunctions.changeText(listItem6, "Great for day touring");

  listItem7.classList.remove("hidden");
  listItem8.classList.remove("hidden");
  generalFunctions.changeText(listItem7, "Less ideal for longer trips");
  generalFunctions.changeText(listItem8, "Lots of storage");

  generalFunctions.changeText(recommend, "Godwin and 7 other friends recommend these tours.");
  generalFunctions.changeImage(recommender3, "../img/flightRecommender3.jpg");
  generalFunctions.changeImage(recommender2, "../img/flightRecommender2.jpg");
  generalFunctions.changeImage(recommender1, "../img/user-3.jpg");
  generalFunctions.changeImage(recommender4, "../img/flightRecommender4.jpg");
  generalFunctions.changeImage(recommender5, "../img/flightRecommender5.jpg");
  generalFunctions.changeImage(recommender6, "../img/flightRecommender6.jpg");

  recommender7.classList.remove("hidden");
  generalFunctions.changeImage(recommender7, "../img/user-1.jpg");

  recommender8.classList.add("hidden");
  recommender9.classList.add("hidden");
  recommender10.classList.add("hidden");

  generalFunctions.changeText(info, "Good news! We have 3 free seats for your selected dates!");
  generalFunctions.changeText(infoButton, "Only 3 seats left");
};

const showYear = () => {
  const now = new Date();
  const currYear = now.getFullYear();

  year.textContent = currYear;
};

//////////////////////////////////////////////////////////
///// EVENTS
window.addEventListener("load", showYear);
hotel.addEventListener("click", displayHotels);
flight.addEventListener("click", displayFlights);
carRental.addEventListener("click", displayCars);
tours.addEventListener("click", displayTours);
