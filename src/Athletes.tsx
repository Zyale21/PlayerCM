import './Athletes.css';
import { useState, useEffect } from 'react';
import AthleteGrid from '$lib/components/AthleteGrid';
import Icon from '$lib/components/Icon';
import athlete0 from '$lib/assets/amos-aguilera.webp'; // fallback image

export default function Athletes() {
	const [searchQuery, setSearchQuery] = useState('');
	const [athletes, setAthletes] = useState<any[]>([]);

	useEffect(() => {
		fetch('http://localhost:8000/api/athletes/')
			.then(res => res.json())
			.then(data => setAthletes(data))
			.catch(err => console.error('Failed to fetch athletes:', err));
	}, []);

	// Optional fallback/mapping logic
	const mappedAthletes = athletes.map((a, i) => ({
		id: i + 1,
		name: `${a.first_name ?? ''} ${a.last_name ?? ''}`,
		position: a.sports?.[0]?.name ?? 'N/A',
		school: a.school ?? '',
		tags: a.sports?.flatMap((s: { name: any; }) => [s.name]) ?? [],
		image: athlete0, // Replace with a.image_url if your API supports it
	}));

	// Safe search filter
	const filteredAthletes = mappedAthletes.filter(athlete =>
		athlete.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
		athlete.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
		athlete.school.toLowerCase().includes(searchQuery.toLowerCase()) ||
		athlete.tags?.some((tag: string) =>
			tag.toLowerCase().includes(searchQuery.toLowerCase())
		)
	);

	return (
		<main className='Athletes-body'>
			<section className='Athletes-hero'>
				<div className='Athletes-info'>
					<h1>Our Elite Athletes</h1>
					<p>
						At Players Club Management, we take pride in representing a diverse
						roster of talented student-athletes. Our athletes are more than just
						competitors—they are leaders, influencers, and future business moguls.
					</p>
				</div>
			</section>

			<div className='Athletes-searchContainer'>
				<label className='Athletes-search'>
					<Icon className='Athletes-searchIcon' icon='tabler:search' />
					<input
						className='Athletes-searchInput'
						name='search'
						type='text'
						placeholder='Search athletes...'
						autoComplete='off'
						value={searchQuery}
						onChange={e => setSearchQuery(e.target.value)}
					/>
				</label>
			</div>

			{filteredAthletes.length > 0 ? (
				<AthleteGrid athletes={filteredAthletes} />
			) : (
				<div className='Athletes-notFound'>
					<h2>No Athletes Found</h2>
					<p>Adjust your search terms and try again.</p>
				</div>
			)}
		</main>
	);
}
