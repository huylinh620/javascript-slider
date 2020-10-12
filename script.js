var images = ['images/image-0.jpg', 'images/image-1.jpg', 'images/image-2.jpg', 'images/image-3.jpg'];
var img =  document.getElementById('slide-image');
var nextBtn = document.getElementById('next-btn');
var prevBtn = document.getElementById('prev-btn');
var count = document.getElementById('count');

var index = 0;
function nextImage() {
  if(index == images.length - 1) {
    index = 0;
  } else {
    index++;
  }
  img.src = images[index];
}

function prevImage() {
  if(index == 0) {
    index = images.length - 1;
  } else {
    index--;
  }
  img.src = images[index];
}

nextBtn.addEventListener('click', function() {
  nextImage();
  count.innerHTML = index + 1;
});

prevBtn.addEventListener('click', function() {
  prevImage();
  count.innerHTML = index + 1;
});


