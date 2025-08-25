import type React from 'react';
import Icon, { type IconProps } from './Icon';
import './ServiceCard.css';
import clsx from 'clsx';

export interface ServiceCardProps extends IconProps {
	title: string;
}

export default function ServiceCard({
	title,
	icon,
	className,
	children,
}: React.PropsWithChildren<ServiceCardProps>) {
	return (
		<div className={clsx('ServiceCard', className)}>
			<header className='ServiceCard-header'>
				<h3 className='ServiceCard-title'>{title}</h3>
				<Icon className='ServiceCard-icon' icon={icon} />
			</header>
			<p className='ServiceCard-body'>{children}</p>
		</div>
	);
}
