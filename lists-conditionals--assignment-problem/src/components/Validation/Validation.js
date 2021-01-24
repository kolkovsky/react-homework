import React from 'react';

const validation = (props) => {
    const textTooLongMessage = 'Text too long';
    const textTooShortMessage = 'Text too short';

    let message = null;
    if (props.validate) {
        if (props.maximum !== undefined && props.lengthEnterText > props.maximum) {
            message = textTooLongMessage;
        } else if (props.minimum !== undefined && props.lengthEnterText < props.minimum) {
            message = textTooShortMessage;
        } else {
            message = null;
        }
    } 

    return (
        <div>
            {message}
        </div>
    );
}

export default validation;