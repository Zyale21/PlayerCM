import './EmployeeList.css';
import type React from 'react';
import EmployeeCard, { type Employee } from './EmployeeCard';
import clsx from 'clsx';
import CallToAction from './CallToAction';

export type EmployeeID = number;

export type ListEmployee = Employee & { id: EmployeeID };

export interface EmployeeListProps
	extends React.ComponentPropsWithoutRef<'ul'> {
	employees: ListEmployee[];
}

export default function EmployeeList({
	employees,
	className,
	...props
}: EmployeeListProps) {
	return (
		<div className='EmployeeList-container'>
			<ul className={clsx('EmployeeList', className)} {...props}>
				{employees.map(({ id, ...employee }, i) => (
					<li key={id} className='EmployeeList-item'>
						<EmployeeCard
							className={clsx({ 'EmployeeCard--right': i % 2 === 1 })}
							{...employee}
						/>
					</li>
				))}
			</ul>
			<CallToAction
				to='/contact'
				className='EmployeeList-callToAction'
				icon='tabler:message'
			>
				Send Us a Message
			</CallToAction>
		</div>
	);
}
