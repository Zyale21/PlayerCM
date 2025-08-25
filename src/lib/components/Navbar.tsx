import { Link, NavLink } from 'react-router';
import './Navbar.css';
import logo from '$lib/assets/pcm_black_accent.jpg';
import { Icon } from '@iconify/react/dist/iconify.js';
import type React from 'react';
import { useState } from 'react';
import clsx from 'clsx';

export type NavbarProps = React.ComponentPropsWithoutRef<'nav'>;

export default function Navbar({ className, ...props }: NavbarProps) {
	const [show, setShow] = useState(false);

	const hide = () => setShow(false);
	const toggle = () => setShow(!show);

	return (
		<nav className={clsx('Navbar', className)} {...props}>
			<Link to='/' className='Navbar-logo'>
				<img
					src={logo}
					alt="Player's Club Management logo"
					className='Navbar-logoImage'
				/>
			</Link>

			<button
				className={clsx('Navbar-menuButton', show && 'is-enabled')}
				type='button'
				onClick={toggle}
			>
				<Icon className='Navbar-menuIcon' icon='tabler:menu-deep' />
			</button>

			<ul
				className={clsx('Navbar-links', show && 'is-expanded')}
				onClick={hide}
				onKeyDown={hide}
			>
				<NavbarItem to='/'>Home</NavbarItem>
				<NavbarItem to='/about'>About</NavbarItem>
				<NavbarItem to='/athletes'>Athletes</NavbarItem>
				<NavbarItem to='/contact'>Contact</NavbarItem>
				<NavbarItem to='/components'>Components</NavbarItem>
				<NavbarItem to='/athletes/demo'>Demo Profile</NavbarItem>
			</ul>
		</nav>
	);
}

interface NavbarItemProps {
	to: string;
}

function NavbarItem({
	to,
	children,
}: React.PropsWithChildren<NavbarItemProps>) {
	return (
		<li className='Navbar-item'>
			<NavLink to={to} className='Navbar-link'>
				{children}
			</NavLink>
		</li>
	);
}
