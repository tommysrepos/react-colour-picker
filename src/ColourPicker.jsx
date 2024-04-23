import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function ColourPicker(){

    const [colour, setColour] = useState('#F07857');

    function handleColourChange(event){
        setColour(event.target.value);
    }

    return( <>
            <div className='colour-picker-container'>

                <h1>Colour Picker</h1>

                <div className='colour-display' style={{backgroundColor: colour}}>
                    <p>Selected colour: {colour}</p>
                </div>

                <div className='input-container'>
                    <label>Select a colour:</label>
                    <input type="color" value={colour} onChange={handleColourChange}/>
                </div>
            </div>
            </>)
}

export default ColourPicker