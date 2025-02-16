import PropTypes from 'prop-types'

export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={props.img.src}
                    alt={props.img.alt}
                />
            </div>
            <div className="info-container">

                <span className="country">{props.country}</span>
                <a href={props.googleMapsLink} target="_blank">View on Google Maps</a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </div>
            
        </article>
    )
}

Entry.propTypes = {
    img: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
    }),
    country: PropTypes.string.isRequired,
    googleMapsLink: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    dates: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}