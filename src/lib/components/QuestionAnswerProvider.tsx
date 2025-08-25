import { useReducer } from 'react';
import {
	type ContextQuestionAnswer,
	QuestionAnswerContext,
	QuestionAnswerDispatchContext,
	type QuestionAnswerProviderProps,
	questionAnswerReducer,
} from '$lib/QuestionAnswerContext';

export function QuestionAnswerProvider({
	children,
	questionAnswers,
}: React.PropsWithChildren<QuestionAnswerProviderProps>) {
	const initialContextQuestionAnswers: ContextQuestionAnswer[] =
		questionAnswers.map(qa => ({ ...qa, open: false }));

	const [contextQuestionAnswers, dispatch] = useReducer(
		questionAnswerReducer,
		initialContextQuestionAnswers,
	);

	return (
		<QuestionAnswerContext.Provider value={contextQuestionAnswers}>
			<QuestionAnswerDispatchContext.Provider value={dispatch}>
				{children}
			</QuestionAnswerDispatchContext.Provider>
		</QuestionAnswerContext.Provider>
	);
}
