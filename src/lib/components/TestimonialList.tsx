import clsx from 'clsx';
import './TestimonialList.css';
import TestimonialCard, { type Testimonial } from './TestimonialCard';

export type TestimonialID = number;

export type ListTestimonial = Testimonial & { id: TestimonialID };

export interface TestimonialListProps
	extends React.ComponentPropsWithoutRef<'ul'> {
	testimonials: ListTestimonial[];
}

export default function TestimonialList({
	testimonials,
	className,
	...props
}: TestimonialListProps) {
	return (
		<ul className={clsx('TestimonialList', className)} {...props}>
			{testimonials.map(({ id, ...testimonial }) => (
				<li key={id} className='TestimonialList-item'>
					<TestimonialCard {...testimonial} />{' '}
				</li>
			))}
		</ul>
	);
}
