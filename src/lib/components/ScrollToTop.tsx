import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ScrollToTop() {
	const { pathname } = useLocation();

	/* biome-ignore lint/correctness/useExhaustiveDependencies:
	 * We don't care about the actual
	 * pathname, just that it's changed */
	useEffect(
		() => window.scrollTo({ left: 0, top: 0, behavior: 'instant' }),
		[pathname],
	);

	return null;
}
