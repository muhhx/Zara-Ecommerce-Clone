import './styles.css'

export default function Options({ options, value, message }) {
    const { setSelectedSection, selectedSection } = options

    return (
        <span
        className='span_option'
        onClick={() => setSelectedSection(value)} 
        style={{fontWeight: selectedSection === value ? '700' : 'initial'}}
        >{message}</span>
    )
}