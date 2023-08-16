const Square = ({ colorValue, hexValue, rgbValue, isDarkText }) => {
    return (
        <section
            className="square"
            style={{ 
                backgroundColor: colorValue, 
                color: isDarkText ? "#000" : "#FFF"
            }}
        >
            <p>{colorValue ? colorValue : 'Empty Value'}</p>
            <p>{hexValue ? hexValue : null}</p>
            <p>{rgbValue ? rgbValue : null}</p>
        </section>
    )
}

Square.defaultProps = {
    colorValue: 'Empty Color Value',
    isDarkText: true,
}

export default Square