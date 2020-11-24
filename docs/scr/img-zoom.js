let images = document.querySelectorAll('.text-img');
console.log(images);

/*
for (let i=0; i<images.length; i++) {
  images[i].onclick = function() {
    if (images[i].classList.contains('text-img-zoom')) {
      images[i].classList.remove('text-img-zoom');
      images[i].classList.remove('hide');
      console.log(images[i]);
    } else {
      images[i].classList.add('text-img-zoom');
      images[i].classList.add('hide');
      console.log(images[i]);
    }
  }
}
*/
for (let i=0; i<images.length; i++) {
  images[i].onclick = function() {
    if (!(images[i].classList.contains('text-img-zoom'))) {
      images[i].classList.add('text-img-zoom');
      console.log(images[i]);
      for (let j=0; j<images.length; j++) {
        if (!(images[j].classList.contains('text-img-zoom'))) {
          images[j].classList.add('donttouch');
          console.log(images[j]);
        }
      }
    } else {
      images[i].classList.remove('text-img-zoom');
      console.log(images[i]);
      for (let k=0; k<images.length; k++) {
        if (images[k].classList.contains('donttouch')) {
          images[k].classList.remove('donttouch');
          console.log(images[k]);
        }
      }
    }


    /*if (images[i].classList.contains('text-img-zoom')) {
      images[i].classList.remove('text-img-zoom');
      console.log(images[i]);
      for (k=0; k<images.length; k++) {
        if (images[k].classList.contains('hide')) {
          images[k].classList.remove('hide');
          console.log(images[k]);
        }
      }
    }*/
  }
}
