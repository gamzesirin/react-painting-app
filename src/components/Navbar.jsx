import '../styles/navbar.css'

import Container from 'react-bootstrap/Container'
import { FaPaintBrush } from 'react-icons/fa'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function NavScrollExample() {
	return (
		<>
			<Navbar className="bg-body-tertiary">
				<Container className="links">
					<Nav.Link style={{ listStyle: 'none' }} className="LOGO" href="/">
						<FaPaintBrush /> Painting Art
					</Nav.Link>
					<Nav.Link style={{ listStyle: 'none' }} className="link" href="/">
						Home
					</Nav.Link>
					<Nav.Link className="link" href="/portfolio">
						Portfolio
					</Nav.Link>
					<Nav.Link className="link" href="/contact">
						Contact
					</Nav.Link>
					<Nav.Link className="link" href="/sss">
						SSS
					</Nav.Link>
					<Nav.Link className="link" href="/rewives">
						Rewives{' '}
					</Nav.Link>
				</Container>
			</Navbar>
		</>
	)
}

export default NavScrollExample
