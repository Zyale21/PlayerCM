import type React from 'react';
import type { IconProps } from './Icon';
import './ServiceList.css';
import CallToAction from './CallToAction';
import clsx from 'clsx';
import ServiceCard from './ServiceCard';

export type ServiceID = number;

export interface Service extends IconProps {
	id: ServiceID;
	title: string;
	body: string;
}

export interface ServiceList extends React.ComponentPropsWithoutRef<'ul'> {
	services: Service[];
}

export default function ServiceList({
	services,
	className,
	...props
}: ServiceList) {
	return (
		<div className='ServiceList-container'>
			<h2 className='ServiceList-title'>Professional NIL Services</h2>

			<ul className={clsx('ServiceList', className)} {...props}>
				{services.map(service => (
					<li className='ServiceList-item' key={service.id}>
						<ServiceCard
							className='ServiceList-service'
							title={service.title}
							icon={service.icon}
						>
							{service.body}
						</ServiceCard>
					</li>
				))}
			</ul>

			<CallToAction
				className='ServiceList-cta'
				to='/contact'
				icon='tabler:users-group'
			>
				Work With Our Team
			</CallToAction>
		</div>
	);
}
