import './styles.css'

export default function Images({ images }) {
    return (
        <div className="item_images">
            {images?.map(image => (
                <div key={image}>
                    <img src={image} alt="Clothing model" />
                </div>
            ))}
        </div>
    )
}