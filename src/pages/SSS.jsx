import '../styles/sss.css'

import { useState } from 'react'

const SSS = () => {
	const [faqs, setFaqs] = useState([
		{
			question: 'Soru 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, enim. ',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non optio hic, voluptas iste voluptatum repudiandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non optio hic, voluptas iste voluptatum repudiandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non optio hic, voluptas iste voluptatum repudiandae.'
		},

		{
			question: 'Soru 2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, enim.',
			answer:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae itaque rem unde illo esse deleniti delectus molestias possimus quis, omnis sit ut molestiae ea sed nobis placeat at tenetur iure nulla. Alias tenetur dolores perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae itaque rem unde illo esse deleniti delectus molestias possimus quis, omnis sit ut molestiae ea sed nobis placeat at tenetur iure nulla. Alias tenetur dolores perferendis isicing elit. Vel, sed!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus est ipsam, quibusdam, quos, quas voluptatum voluptatem quod quae voluptates quia quidem.'
		},
		{
			question: 'Soru 3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, enim.',
			answer:
				'orem ipsum dolor sit amet consectetur adip eveniet atque aperiam ex tempore voluptas inventore cumque voluptate ullam temporibus totam neque nobis, quaerat laudantium quo quasi beatae! Saepe a culpa voluptatem voluptates fugit quaerat, natus odit aperiam? Quod quos illum aperiam assumenda.'
		},
		{
			question: 'Soru 4: Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, enim.',
			answer:
				'orem ipsum dolor sit amet consectetur adip eveniet atque aperiam ex tempore voluptas inventore cumque voluptate ullam temporibus totam neque nobis, quaerat laudantium quo quasi beatae! Saepe a culpa voluptatem voluptates fugit quaerat, natus odit aperiam? Quod quos illum aperiam assumenda.'
		},
		{
			question: 'Soru 5: Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, enim.',
			answer:
				'orem ipsum dolor sit amet consectetur adip eveniet atque aperiam ex tempore voluptas inventore cumque voluptate ullam temporibus totam neque nobis, quaerat laudantium quo quasi beatae! Saepe a culpa voluptatem voluptates fugit quaerat, natus odit aperiam? Quod quos illum aperiam assumenda.'
		}
	])

	const toggleFAQ = (index) => {
		setFaqs((prevFaqs) =>
			prevFaqs.map((faq, i) => {
				if (i === index) {
					return { ...faq, isOpen: !faq.isOpen }
				}
				return faq
			})
		)
	}

	return (
		<div className="sss">
			<h1>Sıkça Sorulan Sorular</h1>
			{faqs.map((faq, index) => (
				<div key={index} className="faq">
					<div className={`question ${faq.isOpen ? 'open' : ''}`} onClick={() => toggleFAQ(index)}>
						{faq.question}
					</div>
					{faq.isOpen && <div className="answer">{faq.answer}</div>}
				</div>
			))}
		</div>
	)
}

export default SSS
