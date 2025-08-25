import type React from 'react';
import CallToAction from './CallToAction';
import './ContactForm.css';
import clsx from 'clsx';

export interface ContactFormProps
	extends Omit<React.ComponentPropsWithoutRef<'form'>, 'action'> {
	title?: string;
	rows?: number;
	cols?: number;
}

export default function ContactForm({
	title = 'Send Us a Message',
	className,
	rows = 6,
	cols = 56,
	...props
}: ContactFormProps) {
	return (
		<form className={clsx('ContactForm', className)} action='/' {...props}>
			<h1 className='ContactForm-header'>{title}</h1>

			<label className='ContactForm-label' htmlFor='contactForm-name'>
				Name
			</label>
			<input
				className='ContactForm-input'
				type='text'
				name='name'
				id='contactForm-name'
				placeholder='John Doe'
				autoComplete='section-contact name work'
			/>

			<label className='ContactForm-label' htmlFor='contactForm-email'>
				Email
			</label>
			<input
				className='ContactForm-input'
				type='email'
				name='email'
				id='contactForm-email'
				placeholder='person@example.com'
				autoComplete='section-contact email work'
			/>

			<label className='ContactForm-label' htmlFor='contactForm-message'>
				Message
			</label>
			<textarea
				className='ContactForm-input ContactForm-input--textarea'
				name='message'
				id='contactForm-message'
				placeholder='Hello!'
				rows={rows}
				cols={cols}
			/>

			<CallToAction
				className='ContactForm-submit'
				ctaType='button'
				type='submit'
				icon='tabler:mail-fast'
			>
				Send Your Message
			</CallToAction>
		</form>
	);
}
