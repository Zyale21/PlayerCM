import './Hero.css';
import { Link } from 'react-router';
import CallToAction from '$lib/components/CallToAction';
import logo from '$lib/assets/pcm_accent_transparent.webp';
import clsx from 'clsx';

export type HeroProps = React.ComponentPropsWithRef<'header'>;

export default function Hero({ className, ...props }: HeroProps) {
	return (
		<header className={clsx('Hero', className)} {...props}>
			<nav className='Hero-nav'>
				<Link className='Hero-link' to='/about'>
					About
				</Link>
				<Link className='Hero-link' to='/athletes'>
					Athletes
				</Link>
				<Link className='Hero-link' to='/contact'>
					Contact
				</Link>
			</nav>

			<img
				className='Hero-logo'
				src={logo}
				alt='Players Club Management logo'
			/>

			<section className='Hero-textContainer'>
				<div className='Hero-text'>
					<h1 className='Hero-tagline'>
						Grow your wealth and build your athletic legacy.
					</h1>
					<hr className='Hero-divider' />
					<p className='Hero-blurb'>
						Unlock your full potential in the NIL space with a team that puts
						athletes first. Whether you’re a student-athlete looking to maximize
						your brand or a business searching for top-tier athlete
						partnerships, we’re here to connect you to the right opportunities.
					</p>

					<CallToAction
						className='Hero-cta'
						icon='tabler:mail-fast'
						to='/contact'
					>
						Contact Us
					</CallToAction>
				</div>
			</section>
		</header>
	);
}
