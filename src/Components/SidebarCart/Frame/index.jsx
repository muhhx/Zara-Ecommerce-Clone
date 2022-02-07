import './styles.css'

export default function Frame({ item }) {
    return (
        <div className='frame_container'>
            <span>{item.name}</span>
            <div className='frame_wrapper'>
                <div className='frame_image'>
                    <img src={item?.color.images[0]} alt="Clothing image" />
                </div>
                <div className='frame_info'>
                    <div>
                        <span>{item.color.color}</span>   
                        <span>{item.color.size[0]}</span>   
                    </div>
                    <div>
                        <span>{item.quantity === 1 ? `R$ ${item.price}` : `${item.quantity} X R$ ${item.price}`}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}