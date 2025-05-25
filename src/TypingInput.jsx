import React from 'react'
import PropTypes from 'prop-types'

const TypingInput = ({input, setInput}) => {
    return (
    <div>
            <textarea 
            placeholder='type here...' 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
    </div>

    )
}

TypingInput.propTypes={
    input: PropTypes.string.isRequired,
    setInput: PropTypes.func.isRequired,
};

export default TypingInput
