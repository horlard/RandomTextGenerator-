import React from 'react';


const TextDetail = ({text}) => {
    return (
        <div>
            <div className='ui header'>
                Random text editor
            </div>
            <div>
                {text}
            </div>
        </div>

        
    )
}
export default TextDetail;