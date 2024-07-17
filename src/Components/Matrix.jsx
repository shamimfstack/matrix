// import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Matrix = ({color, setColors}) => {
    const handleClick = () => {
        setColors('green');
    }
    
    return (
        // eslint-disable-next-line react/prop-types
        <div onClick={handleClick} style={{backgroundColor: color}} className="w-24 h-24">
            
        </div>
    );
}

export default Matrix;