import { Icon as IconifyIcon, type IconifyIconProps } from '@iconify/react';

export interface IconProps {
	icon: string | IconifyIconProps;
	className?: string;
}

export default function Icon({ icon, className }: IconProps) {
	const iconProps = typeof icon === 'string' ? { icon } : icon;

	// @ts-expect-error Icon uses an internal interface for its props
	// (though IconifyIconProps is compatible with it)
	return <IconifyIcon className={className} {...iconProps} />;
}
