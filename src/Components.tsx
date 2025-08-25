import './Components.css';
import CallToAction from '$lib/components/CallToAction';
import { Link } from 'react-router';
import type { QuestionAnswer } from '$lib/QuestionAnswerContext';
import QuestionAnswerList from '$lib/components/QuestionAnswerList';
import type { Stat } from '$lib/components/StatCard';
import StatCard from '$lib/components/StatCard';
import ServiceCard from '$lib/components/ServiceCard';
import AthleteCard, { type Athlete } from '$lib/components/AthleteCard';
import amos from '$lib/assets/amos-aguilera.webp';
import EmployeeCard, { type Employee } from '$lib/components/EmployeeCard';
import demoEmployee from '$lib/assets/employee.jpg';
import TestimonialCard, {
	type Testimonial,
} from '$/lib/components/TestimonialCard';
import testimonialPhoto from '$/lib/assets/testimonial1.png';

export default function Components() {
	// TODO: get Q&A's from django
	const questionAnswers: QuestionAnswer[] = [
		{
			id: 0,
			question: 'What services does Players Club Management offer?',
			answer:
				'We provide NIL deal negotiation, brand partnership facilitation, marketing strategy development, financial literacy education, and personal brand coaching for student-athletes.',
		},
		{ id: 1, question: 'Hello?', answer: 'Hi!' },
		{
			id: 2,
			question: 'What services does Players Club Management offer?',
			answer:
				'We provide NIL deal negotiation, brand partnership facilitation, marketing strategy development, financial literacy education, and personal brand coaching for student-athletes.',
		},
	];

	// TODO: get athlete stats from django
	const baseballStats: Stat[] = [
		{
			id: 0,
			name: 'Body',
			body: '6-3, 200 pounds. Strong frame with present strength.',
		},
		{
			id: 1,
			name: 'Hit',
			body: 'RHH. Slightly open stance that evens out when he strides. Hands rest away from back shoulder. Higher launch angle that produces a lot of fly balls. 64.3 mph bat speed with 12g of rotational acceleration.',
		},
		{
			id: 2,
			name: 'Power',
			body: '89 mph max exit velocity (78 avg.); 339-foot max batted distance. Consistently pulls the ball.',
		},
		{
			id: 3,
			name: 'Aim',
			body: 'RH. INF - 71.00 mph. Side arm release across the infield.',
		},
		{ id: 4, name: 'Defense', body: 'Calm footwork through the play.' },
	];

	// TODO: get athlete from django
	const athlete: Athlete = {
		name: 'Amos Aguilera',
		position: '1B',
		school: 'Jurupa Hills High School',
		image: amos,
		tags: ['Baseball', 'NIL', 'Multi-Sport'],
	};

	// TODO: get employees from django?
	const employee: Employee = {
		name: 'Santiago Zuniga',
		position: 'Founder & CEO',
		body: 'With a deep understanding of the NIL space and a passion for helping athletes succeed, Santiago leads Players Club Management with expertise and dedication. His vision is to create a platform where student-athletes can thrive both on and off the field.',
		image: demoEmployee,
	};

	// TODO: get testimonials from django?
	const testimonial: Testimonial = {
		tagline: 'The best organization in the business',
		quote:
			"I really can't say enough about how smoothly they've been handling everything. They really are the best organization in the business.",
		attribution: {
			name: 'Buck Wheatley',
			credentials: 'UCLA Football Athlete',
		},
	};

	const testimonialWithPhoto: Testimonial = structuredClone(testimonial);
	testimonialWithPhoto.attribution.image = testimonialPhoto;

	return (
		<div style={{ padding: '1rem' }}>
			<CallToAction to='#' className='test' icon='tabler:mail-fast'>
				Contact Us
			</CallToAction>

			<Link to='/'>Go to home</Link>

			<QuestionAnswerList list={questionAnswers} />

			<StatCard
				className='Components-statCard'
				title='Baseball'
				icon='tabler:ball-baseball'
				stats={baseballStats}
			/>

			<ServiceCard
				className='Components-serviceCard'
				title='Athlete Representation'
				icon='tabler:user-star'
			>
				We guide athletes in securing NIL deals by connecting them with brands
				and managing negotiations.
			</ServiceCard>

			<AthleteCard
				className='Components-athleteCard'
				to='/athletes/demo'
				{...athlete}
			/>

			<EmployeeCard className='Components-employeeCard' {...employee} />

			<TestimonialCard {...testimonial} />
			<TestimonialCard {...testimonialWithPhoto} />
		</div>
	);
}
