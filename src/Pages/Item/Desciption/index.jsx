import { useState } from 'react'
import './styles.css'

export default function Description({ message }) {
    const [seeMore, setSeeMore] = useState(false)

    return (
        <div className="item_details-description">
            <p style={{height: seeMore === false ? '60px' : 'auto'}}>{message}</p>
            <button onClick={() => setSeeMore(seeMore === false ? true : false)}>{seeMore === false ? 'Ver mais' : 'Ver menos'}</button>
        </div>
    )
}