import React from 'react'
import PropTypes from 'prop-types'

const TypingStats = ({wpm, accuracy, errors}) => {
    return (
    <div>
            <p>WPM: <span>{wpm}</span></p>
            <p>Accuracy: <span>{accuracy}</span></p>
            <p>Errors: <span>{errors}</span></p>
    </div>
    )
}

TypingStats.propTypes={ 
    wpm: PropTypes.number.isRequired,
    accuracy: PropTypes.number.isRequired,
    errors: PropTypes.number.isRequired,
};

export default TypingStats
