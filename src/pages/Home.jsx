import '../styles/home.css'

import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<div className="home-page">
			<h1 className="title">WELCOME MY WEBSITE</h1>
			<Link to="/portfolio">
				<button className="btn">Show Portfolio</button>
			</Link>
		</div>
	)
}

export default Home
