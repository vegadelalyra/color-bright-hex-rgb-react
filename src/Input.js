import colorNames from 'colornames'

const Input = ({ 
    colorValue, setColorValue, 
    setHexValue, setRgbValue,
    isDarkText, setIsDarkText
}) => {
    return (
        <form onSubmit={event => event.preventDefault()}>
            <label>Add Color Name:</label>
            <input 
                maxLength='20'
                autoFocus
                type="text" 
                placeholder="Add color name"
                required
                value={colorValue}
                onChange={event => {
                    setColorValue(event.target.value)
                    setHexValue(colorNames(event.target.value))
                    setRgbValue('')
                    setIsDarkText(hex_rgb_is_light(
                        colorNames(event.target.value), 
                        isDarkText, 
                        event.target.value,
                        setRgbValue
                    ))
                }}
            />
        </form>
    )
}

export function hex_rgb_is_light(color, lastDarkTextValue, inputValueHasLength, RGBsetter) {
    if (!color) {
        if(!!inputValueHasLength) return lastDarkTextValue
        else return true
    } 

    const hex = color.replace('#', '')
    const c_r = parseInt(hex.substring(0, 0 + 2), 16)
    const c_g = parseInt(hex.substring(2, 2 + 2), 16)
    const c_b = parseInt(hex.substring(4, 4 + 2), 16)
    const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000

    RGBsetter('rgb(' + c_r + ', ' + c_g + ', ' + c_b + ')')
    return brightness > 155
}

export default Input