document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('.image img');
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var close = document.querySelector('.close');
    var galleryImg = document.querySelector('.gallery_inner img');
    var gallery = document.querySelector('.gallery');

    var currentIndex = 0;

    function showGallery() {
        if (currentIndex == 0) {
            prev.classList.add('hide');
        }
        else {
            prev.classList.remove('hide');
        }
        if (currentIndex == images.length - 1) {
            next.classList.add('hide');
        }
        else {
            next.classList.remove('hide');
        }
        gallery.classList.add('show');
        gallery.classList.remove('hide');
        images.forEach(function (img, index) {
            if (index === currentIndex) {
                img.classList.add('active');
                img.classList.remove('dim');
            } else {
                img.classList.add('dim');
                img.classList.remove('active');
            }
        });
        currentImage = images[currentIndex].getAttribute('src');
        galleryImg.setAttribute('src', currentImage);
    }

    images.forEach(function (item, index) {
        item.addEventListener('click', function () {
            currentIndex = index;
            showGallery();
        });
    });


    close.addEventListener('click', function () {
        gallery.classList.add('hide');
        gallery.classList.remove('show');
    });

    document.addEventListener('keydown', function (e) {
        if (e.key == 'Escape' || e.key == 'Esc') {
            gallery.classList.remove('show');
        }
    });

    next.addEventListener('click', function () {
        currentIndex++;
        showGallery();
    });
    prev.addEventListener('click', function () {
        currentIndex--;
        showGallery();
    });
});