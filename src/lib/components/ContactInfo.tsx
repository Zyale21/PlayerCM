import { Link } from 'react-router';
import './ContactInfo.css';
import Icon, { type IconProps } from './Icon';

export default function ContactInfo() {
	return (
		<section className='ContactInfo'>
			<h1 className='ContactInfo-header'>Our Contact Info</h1>
			<div className='ContactInfo-traditional'>
				<ContactInfoItem
					icon='tabler:mail'
					text='playersclubmgmtsjz@gmail.com'
					to='mailto:playersclubmgmtsjz@gmail.com'
				/>
				<ContactInfoItem
					icon='tabler:phone'
					text='(909) 232-2422'
					to='tel:+1(909)232-2422'
				/>
			</div>
			<div className='ContactInfo-socialMedia'>
				<ContactInfoItem
					icon='tabler:brand-instagram'
					text='@playersclubmgmt'
					to='https://www.instagram.com/playersclubmgmt/'
				/>
			</div>
		</section>
	);
}

interface ContactInfoItemProps extends IconProps {
	text: string;
	to: string;
}

export function ContactInfoItem({ icon, text, to }: ContactInfoItemProps) {
	return (
		<Link className='ContactInfo-item' to={to}>
			<Icon className='ContactInfo-logo' icon={icon} />
			{text}
		</Link>
	);
}
