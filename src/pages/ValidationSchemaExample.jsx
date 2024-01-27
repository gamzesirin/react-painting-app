import '../styles/contact.css'

import * as Yup from 'yup'

import { Field, Form, Formik } from 'formik'

const Contact = Yup.object().shape({
	firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
	lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords must match')
		.required('Required'),
	acceptTerms: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required')
})

const ValidationSchemaExample = () => (
	<div className="form">
		<h1>Contact Form</h1>
		<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
				passwword: '',
				confirmPassword: '',
				acceptTerms: false // added for our checkbox
			}}
			validationSchema={Contact}
			onSubmit={(values) => {
				// same shape as initial values
				console.log(values)
			}}
		>
			{({ errors, touched }) => (
				<Form>
					<div>
						<label>Adınız : </label>
						<br></br>
						<Field name="firstName" />
						{errors.firstName && touched.firstName ? <div>{errors.firstName}</div> : null}
					</div>
					<div>
						<label>Soyadınız : </label>
						<br></br>
						<Field name="lastName" />
						{errors.lastName && touched.lastName ? <div>{errors.lastName}</div> : null}
					</div>
					<div>
						<label>Email : </label>
						<br></br>
						<Field name="email" />
						{errors.email && touched.email ? <div>{errors.email}</div> : null}
					</div>
					<div>
						<label>Şifre : </label>
						<br></br>
						<Field name="password" type="password" />
						{errors.password && touched.password ? <div>{errors.password}</div> : null}
					</div>
					<div>
						<label>Şifre Tekrar : </label>
						<br></br>
						<Field name="confirmPassword" type="password" />
						{errors.confirmPassword && touched.confirmPassword ? <div>{errors.confirmPassword}</div> : null}
					</div>
					<div>
						<label>Kabul Ediyorum : </label>
						<Field name="acceptTerms" type="checkbox" />
						{errors.acceptTerms && touched.acceptTerms ? <div>{errors.acceptTerms}</div> : null}
					</div>
					<button type="submit">Submit</button>
				</Form>
			)}
		</Formik>
	</div>
)

export default ValidationSchemaExample
