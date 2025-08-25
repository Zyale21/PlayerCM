import './StatCard.css';
import clsx from 'clsx';
import Icon, { type IconProps } from './Icon';

export interface StatCardProps extends IconProps {
	title: string;
	stats: Stat[];
}

export interface Stat {
	id: number;
	name: string;
	body: string;
}

export default function StatCard({
	title,
	icon,
	stats,
	className,
}: StatCardProps) {
	return (
		<div className={clsx('StatCard', className)}>
			<header className='StatCard-header'>
				<h3 className='StatCard-title'>{title}</h3>
				<Icon className='StatCard-icon' icon={icon} />
			</header>

			<ul className='StatCard-stats'>
				{stats.map(({ id, name, body }) => (
					<li key={id} className='StatCard-item'>
						<h4 className='StatCard-statTitle'>{name}</h4>
						<p className='StatCard-statBody'>{body}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
