import type React from 'react';
import './EmployeeCard.css';
import clsx from 'clsx';

export interface Employee {
	name: string;
	position: string;
	body: string;
	image: string;
}

export type EmployeeCardProps = Employee &
	React.ComponentPropsWithoutRef<'div'>;

export default function EmployeeCard({
	name,
	position,
	body,
	image,
	className,
	...props
}: EmployeeCardProps) {
	return (
		<div className={clsx('EmployeeCard', className)} {...props}>
			<img
				src={image}
				alt={`Portrait of ${name}`}
				className='EmployeeCard-portrait'
			/>

			<div className='EmployeeCard-info'>
				<div className='EmployeeCard-bio'>
					<h3 className='EmployeeCard-name'>{name}</h3>
					<p className='EmployeeCard-position'>{position}</p>
				</div>

				<p className='EmployeeCard-body'>{body}</p>
			</div>
		</div>
	);
}
