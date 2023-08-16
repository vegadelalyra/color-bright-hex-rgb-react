import Square from './Square'
import Input from './Input'
import { useState } from 'react'

function App() {
	const [colorValue, setColorValue] = useState('')
	const [hexValue, setHexValue] = useState('')
	const [rgbValue, setRgbValue] = useState('')
	const [isDarkText, setIsDarkText] = useState(true)

	return (
		<main className="App">
            <Square 
				hexValue={hexValue}
				colorValue={colorValue}
				rgbValue={rgbValue}
				isDarkText={isDarkText}
			/>
            <Input 
				colorValue={colorValue}
				setColorValue={setColorValue}
				hexValue={hexValue}
				setHexValue={setHexValue}
				setRgbValue={setRgbValue}
				isDarkText={isDarkText}
				setIsDarkText={setIsDarkText}
			/>
		</main>
	)
}	

export default App