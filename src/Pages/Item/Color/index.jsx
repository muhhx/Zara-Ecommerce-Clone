import './styles.css'

export default function Color({ setSelectedColor, selectedColor, color }) {
    return (
        <div
            onClick={() => setSelectedColor(color)}
            style={{borderColor: selectedColor?.id === color.id ? 'black' : 'transparent'}}
            className='item_details-colors_outer'
            >
            <div className='item_details-colors_inner' style={{backgroundColor: color.rgb}}>
            </div>
        </div>
    )
}