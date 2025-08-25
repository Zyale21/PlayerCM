import './AboutVideo.css';
import clsx from 'clsx';
import type React from 'react';
import video from '$lib/assets/homepage_video.webm';

export type AboutVideoProps = React.ComponentPropsWithoutRef<'div'>;

export default function AboutVideo({ className, ...props }: AboutVideoProps) {
	return (
		<div className={clsx('AboutVideo-container', className)} {...props}>
			<div className='AboutVideo-layout'>
				<h2 className='AboutVideo-title'>Who Are We</h2>
				<p className='AboutVideo-info'>
					As an NIL agency, Players Club Management is focused on helping high
					school and college athletes unlock the full potential of their NIL
					rights through partnered brand deals, social media, and personalized
					management.
				</p>

				<video
					controls
					muted
					autoPlay
					loop
					src={video}
					className='AboutVideo'
				/>
			</div>
		</div>
	);
}
