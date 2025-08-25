import CallToAction from '$lib/components/CallToAction';
import './FinalHook.css';

export default function FinalHook() {
	return (
		<div className='FinalHook-container'>
			<div className='FinalHook'>
				<div className='FinalHook-content'>
					<h2 className='FinalHook-title'>
						Ready to Embark on Your NIL Journey?
					</h2>
					<p className='FinalHook-body'>
						Our team of full-time professionals will get you started on your
						journey and help you make the most out of your NIL rights to build
						your wealth and legacy.
					</p>
				</div>
				<CallToAction
					className='FinalHook-callToAction'
					to='/contact'
					icon='tabler:calendar-time'
				>
					Schedule an Appointment With an NIL Professional
				</CallToAction>
			</div>
		</div>
	);
}
