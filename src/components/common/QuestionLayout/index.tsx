import { QuestionLayoutWrapper } from './style';
import { TQuestionLayout } from './type';

const QuestionLayout = ({ style, type, question, pos }: TQuestionLayout) => {
  return (
    <QuestionLayoutWrapper style={style}>
      <div className="question">{question}</div>
      {type === 'vocabulary' && <div className="pos">{pos}</div>}
    </QuestionLayoutWrapper>
  );
};

export default QuestionLayout;
