import React from 'react'
import PropTypes from 'prop-types'


const ColorPicker = ({ colors }) => {
    console.log('colors', colors)
    const handleColorClick = (color) => {
        console.log('e.target.value :>> ', color);

    }
    return (
        <div className='color_picker_container'>
            {colors && colors.map((color, index) => {
                const bg_color = `${color}`
                console.log('bg_color :>> ', `${color}`);
                return (
                    <button className="color_picker" style={{ backgroundColor: bg_color }} key={index} onClick={() => handleColorClick(bg_color)}></button>
                )

            })}
        </div>
    )
}

ColorPicker.propTypes = {
    //colors: object.isRequired,
}

export default ColorPicker
