import type React from 'react';
import './TestimonialCard.css';
import clsx from 'clsx';

export interface Attribution {
	name: string;
	credentials?: string;
	image?: string;
}

export interface Testimonial {
	tagline: string;
	quote: string;
	attribution: Attribution;
}

export type TestimonialCardProps = Testimonial &
	React.ComponentPropsWithoutRef<'div'>;

export default function TestimonialCard({
	tagline,
	quote,
	attribution,
	className,
	...props
}: TestimonialCardProps) {
	return (
		<div className={clsx('TestimonialCard', className)} {...props}>
			<h3 className='TestimonialCard-tagline'>{tagline}</h3>
			<p className='TestimonialCard-quote'>{quote}</p>
			<div className='TestimonialCard-attributionContainer'>
				{attribution.image && (
					<img
						className='TestimonialCard-attributionPhoto'
						src={attribution.image}
						alt={`A portrait of ${attribution.name}`}
					/>
				)}
				<p className='TestimonialCard-attribution'>
					{attribution.credentials
						? `${attribution.name}, ${attribution.credentials}`
						: attribution.name}
				</p>
			</div>
		</div>
	);
}
