import './App.css'

import { Route, Routes } from 'react-router-dom'

import Footer from './components/Footer'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Portfolio from './pages/Portfolio'
import Rewives from './pages/Rewives'
import SSS from './pages/SSS'
import ValidationSchemaExample from './pages/ValidationSchemaExample'

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/contact" element={<ValidationSchemaExample />} />
				<Route path="/sss" element={<SSS />} />
				<Route path="/rewives" element={<Rewives />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
