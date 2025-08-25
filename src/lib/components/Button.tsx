import './Button.css';
import clsx from 'clsx';
import type React from 'react';
import Icon, { type IconProps } from './Icon';

export type ButtonProps = Partial<IconProps> &
	React.ComponentPropsWithoutRef<'button'>;

export default function Button({
	children,
	className,
	icon,
	...props
}: ButtonProps) {
	return (
		<button className={clsx('Button', className)} {...props}>
			{icon && <Icon icon={icon} className='Button-icon' />}
			{children}
		</button>
	);
}
