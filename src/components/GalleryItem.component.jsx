const GalleryItem = ({ name, image, openLightboxOnSlide, slide }) => {
    return (
        <div className="gallery__item" style={{backgroundImage: `url('${image}')`}} onClick={() => openLightboxOnSlide(slide)}>
            <p className="gallery__item--title">{name}</p>
        </div>
    )
}

export default GalleryItem;