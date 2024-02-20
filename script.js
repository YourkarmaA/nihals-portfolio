document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.getElementById('gallery-container');
    const totalImages = 22; // Update this to the total number of images

    for (let i = 1; i <= totalImages; i++) {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        const img = document.createElement('img');
        const paddedIndex = i.toString().padStart(2, '0'); // Add padding to the image index
        
        img.src = `${paddedIndex}.jpeg`;
        img.alt = `Image ${i}`;

        // Add a click event listener to open the image in a lightbox
        img.addEventListener('click', () => openLightbox(img.src, img.alt, i, totalImages));

        galleryItem.appendChild(img);
        galleryContainer.appendChild(galleryItem);
    }

    function openLightbox(src, alt, currentImage, totalImages) {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');

        const lightboxContent = document.createElement('div');
        lightboxContent.classList.add('lightbox-content');

        const lightboxImage = document.createElement('img');
        lightboxImage.src = src;
        lightboxImage.alt = alt;

        const imageInfo = document.createElement('div');
        imageInfo.classList.add('image-info');
        imageInfo.innerHTML = `Image ${currentImage} of ${totalImages}`;

        const closeBtn = document.createElement('span');
        closeBtn.classList.add('close-btn');
        closeBtn.innerHTML = '&times;';

        closeBtn.addEventListener('click', () => {
            lightbox.remove();
        });

        lightboxContent.appendChild(lightboxImage);
        lightboxContent.appendChild(imageInfo);
        lightboxContent.appendChild(closeBtn);
        lightbox.appendChild(lightboxContent);

        // Close the lightbox when clicking outside the image
        lightbox.addEventListener('click', (event) => {
            if (event.target === lightbox) {
                lightbox.remove();
            }
        });

        document.body.appendChild(lightbox);
    }
});
