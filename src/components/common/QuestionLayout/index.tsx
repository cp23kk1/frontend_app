import { ReactNode } from 'react';
import { QuestionLayoutWrapper } from './style';
import { TQuestionLayout } from './type';

const QuestionLayout = ({ style, type, question, pos }: TQuestionLayout) => {
  let questionArr = question ? question.toString() : '';
  return (
    <QuestionLayoutWrapper style={style}>
      <div
        className="question"
        style={{
          fontSize: type === 'sentence' ? 64 : 128,
          fontWeight: type === 'sentence' ? 500 : 600
        }}
        dangerouslySetInnerHTML={{
          __html: questionArr
            .toString()
            .replace('??', '<span class="sentence-box">???</span>')
        }}
      >
        {/* {questionArr
          ?.map((value) => {
            return value?.toLocaleString().includes('??') ? (
              <div>asdf</div>
            ) : (
              value
            );
          })
          .join(' ')} */}
      </div>
      {type === 'vocabulary' && <div className="pos">{pos}</div>}
      {type === 'sentence' && <div className="pos">{pos}</div>}
    </QuestionLayoutWrapper>
  );
};

export default QuestionLayout;
