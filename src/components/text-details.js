import React from 'react';
import '../style.css'


const TextDetail = ({text}) => {
    return (
        <div>
            
            <div className='para-text'>
                
                <p>{text}</p>
                
            </div>
        </div>

        
    )
}
export default TextDetail;