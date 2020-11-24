let images = document.querySelectorAll('.text-img');
for (let i=0; i<images.length; i++) {
  images[i].onclick = function() {
    if (!(images[i].classList.contains('text-img-zoom'))) {
      images[i].classList.add('text-img-zoom');
      for (let j=0; j<images.length; j++) {
        if (!(images[j].classList.contains('text-img-zoom'))) {
          images[j].classList.add('donttouch');
        }
      }
    } else {
      images[i].classList.remove('text-img-zoom');
      for (let k=0; k<images.length; k++) {
        if (images[k].classList.contains('donttouch')) {
          images[k].classList.remove('donttouch');
        }
      }
    }
  }
}
