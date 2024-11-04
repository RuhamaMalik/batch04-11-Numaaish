var images = [
  "https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHrsx_GrFXSWa-2AH65c9SV6pEfCfZf-cBxw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQylFvrQp18ryDpL1P9RsGdMa0G2-PJjIKxlvaV0C4k7hW4vcunroGBVkXI9NuPFKSg7yc&usqp=CAU",
  "https://img.lovepik.com/photo/48013/0640.jpg_wh860.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaKAzhC8XX3BeHnq2nwyconccO8qa_yyTFyg&s",
];

currentIndex = 0;

function next() {
  //   var currentImg = document.getElementById("slider-img");
  // console.log(currentImg);
  // console.log(currentImg.src);
  //   currentIndex++;
  //   currentImg.src = images[currentIndex];

  var currentImg = document.getElementById("slider-img");

  if (currentIndex === images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  currentImg.src = images[currentIndex];
}

function prev() {
  var currentImg = document.getElementById("slider-img");
  if (currentIndex === 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex--;
  }

  currentImg.src = images[currentIndex];
}
