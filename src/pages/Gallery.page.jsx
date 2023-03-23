import { useState } from 'react';
import FsLightbox from 'fslightbox-react';

import GalleryItem from '../components/GalleryItem.component';
import galleryItems from '../data/galleryItems';

const Gallery = () => {
    const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1
	});

    function openLightboxOnSlide(number) {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number
		});
	}

    return (
        <section className="gallery">
            <div className="gallery__container">
                {galleryItems.map((item, i) => <GalleryItem key={i+1} name={item.name} image={item.image} openLightboxOnSlide={openLightboxOnSlide} slide={i+1} />)}
            </div>

            <FsLightbox
				toggler={lightboxController.toggler}
				sources={galleryItems.map(item => item.image)}
                slide={lightboxController.slide}
			/>
        </section>
    )
}

export default Gallery;