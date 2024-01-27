import '../styles/footer.css'

function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<p className="text-center">&copy; {new Date().getFullYear()} Painting Art. All rights reserved.</p>
			</div>
		</footer>
	)
}

export default Footer
