import PropTypes from 'prop-types'

const Character = ({name, birth, death, race, realm, spouse, imgUrl}) => {
    return <div className="card-container">
        <h2>{name}</h2>
        <img src={imgUrl} alt={name} />
            <ol>
                <li>Date of Birth: {birth}</li>
                <li>Date of Death: {death}</li>
                <li>Race: {race}</li>
                <li>Realm:{realm}</li>
                <li>Spouse: {spouse}</li>
            </ol>
    </div>
}

Character.propTypes = {
    name: PropTypes.string,
    birth: PropTypes.string,
    death: PropTypes.string,
    race: PropTypes.string,
    realm: PropTypes.string,
    spouse: PropTypes.string,
    imgUrl: PropTypes.string
}

export default Character;