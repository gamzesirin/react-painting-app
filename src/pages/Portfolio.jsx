import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../styles/porfolio.css'

import { Carousel } from 'react-responsive-carousel'
import res1 from '../images/res1.webp'
import res2 from '../images/res2webp.webp'
import res3 from '../images/res3.webp'
import res4 from '../images/res4.webp'
import res5 from '../images/res5.jpg'
import res6 from '../images/res6.jpeg'

const Portfolio = () => {
	return (
		<div className="carousel-container">
			<Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false}>
				<div>
					<img src={res1} alt="Slide 1" />
					<p className="legend">Slide 1</p>
				</div>
				<div>
					<img src={res2} alt="Slide 2" />
					<p className="legend">Slide 2</p>
				</div>
				<div>
					<img src={res3} alt="Slide 3" />
					<p className="legend">Slide 3</p>
				</div>
				<div>
					<img src={res4} alt="Slide 4" />
					<p className="legend">Slide 4</p>
				</div>
				<div>
					<img src={res5} alt="Slide 5" />
					<p className="legend">Slide 5</p>
				</div>
				<div>
					<img src={res6} alt="Slide 6" />
					<p className="legend">Slide 6</p>
				</div>
			</Carousel>
		</div>
	)
}

export default Portfolio
