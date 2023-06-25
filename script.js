let movies = [
    {
      name: "falcon and the winter soldier",
      des:
        "The Falcon and The Winter Soldier is an American web television miniseries, based on the Marvel Comics superheroes of the same names. The series is a sequel to Avengers: Endgame. It is the fourteenth television series in the Marvel Cinematic Universe, and the second installment of Phase Four.",
      image: "images/slider 2.PNG"
    },
    {
      name: "loki",
      des:
        "A tall and lanky figure with either strawberry blonde or fiery red hair.A cunning trickster who had the ability to change his shape and sex. Although his father was the giant Fárbauti, he was included among the Aesir (a tribe of gods).",
      image: "images/slider 1.PNG"
    },
    {
      name: "wanda vision",
      des:
        "It follows Wanda Maximoff and Vision as they live an idyllic suburban life in the town of Westview, New Jersey, until their reality starts moving through different decades of sitcom homages and television tropes. Schaeffer served as head writer for the series, which was directed by Matt Shakman.",
      image: "images/slider 3.PNG"
    },
    {
      name: "raya and the last dragon",
      des:
        "The film follows Raya, a warrior princess who must find the fabled last dragon in order to save her divided home world from a ravenous plague. Throughout her journey, Raya traverses the various kingdoms of Kumandra, with an unusual band of misfits by her side.",
      image: "images/slider 4.PNG"
    },
    {
      name: "luca",
      des:
        "A young boy experiences an unforgettable seaside summer on the Italian Riviera filled with gelato, pasta and endless scooter rides. Luca shares these adventures with his newfound best friend, but all the fun is threatened by a deeply-held secret: he is a sea monster from another world just below the ocean's surface.",
      image: "images/slider 5.PNG"
    }
  ];
  
  const caraousel = document.querySelector(".caraousel");
  let sliders = [];
  
  let slideIndex = 0; //track the current slideIndex
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    //create DOM Elements
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    // attaching all elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    caraousel.appendChild(slide);
  
    // imgElement.appendChild(document.createTextNode(""));
    // h1.appendChild(document.createTextNode(movies[slideIndex].name));
    // p.appendChild(document.createTextNode(movies[slideIndex].des));
    // content.appendChild(h1);
    // content.appendChild(p);
    // slide.appendChild(content);
    // slide.appendChild(imgElement);
    // caraousel.appendChild(slide);
  
    //setting up images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    //setting elements classnames
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);
  
  //Video Cards
  
  const videoCards = [...document.querySelectorAll(".video-card")];
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  // card sliders
  
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth - 200;
    });
  
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth + 200;
    });
  
    // let cardContainers = [...document.querySelectorAll(".card-container")];
    // let preBtns = [...document.querySelectorAll(".pre-btn")];
    // let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
    // cardContainers.forEach((item, i) => {
    //   let containerDimensions = item.getBoundingClientRect();
    //   let containerWidth = containerDimensions.width;
  
    // nxtBtns[i].addEventListener("click", () => {
    //   item.scrollLeft += containerWidth - 200;
    // });
  
    // preBtns[i].addEventListener("click", () => {
    //   item.scrollLeft -= containerWidth + 200;
    // });
  });