import './QuestionAnswerList.css';
import {
	type QuestionAnswer,
	useQuestionAnswers,
	useQuestionAnswersDispatch,
} from '$lib/QuestionAnswerContext';
import clsx from 'clsx';
import Button, { type ButtonProps } from './Button';
import QuestionAnswerEl from './QuestionAnswer';
import { QuestionAnswerProvider } from './QuestionAnswerProvider';
import type React from 'react';

export interface QuestionAnswerListProps {
	list: QuestionAnswer[];
}

export default function QuestionAnswerList({ list }: QuestionAnswerListProps) {
	return (
		<QuestionAnswerProvider questionAnswers={list}>
			<div className='QuestionAnswerList'>
				<ul className='QuestionAnswerList-ul'>
					<QuestionAnswers className='QuestionAnswerList-item' />
				</ul>
				<div className='QuestionAnswerList-collapseContainer'>
					<CollapseAll className={'QuestionAnswerList-collapse'} />
				</div>
			</div>
		</QuestionAnswerProvider>
	);
}

type QuestionAnswersProps = React.ComponentPropsWithoutRef<'li'>;

function QuestionAnswers({ className, ...props }: QuestionAnswersProps) {
	const questionAnswers = useQuestionAnswers();
	const dispatch = useQuestionAnswersDispatch();

	return (
		<>
			{questionAnswers.map((qa, i) => (
				<li className='QuestionAnswerList-li' key={qa.id} {...props}>
					<QuestionAnswerEl
						question={qa.question}
						open={qa.open}
						onClick={() => dispatch({ type: 'toggle', id: qa.id })}
						last={i + 1 === questionAnswers.length}
						className={className ?? ''}
					>
						{qa.answer}
					</QuestionAnswerEl>
				</li>
			))}
		</>
	);
}

type CollapseAllProps = Omit<ButtonProps, 'icon'>;

function CollapseAll({ className, ...props }: CollapseAllProps) {
	const questionAnswers = useQuestionAnswers();
	const dispatch = useQuestionAnswersDispatch();
	if (!questionAnswers || !dispatch) return;

	const show =
		questionAnswers.reduce((total, qa) => total + (qa.open ? 1 : 0), 0) > 1;

	return (
		<Button
			icon='tabler:chevrons-up'
			onClick={() => dispatch({ type: 'collapseAll' })}
			className={clsx(className, show && 'is-visible')}
			{...props}
		>
			Collapse all
		</Button>
	);
}
