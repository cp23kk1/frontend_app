import { ReactNode } from 'react';
import { QuestionLayoutWrapper } from './style';
import { TQuestionLayout } from './type';
import { v4 as uuid } from 'uuid';
import { Col } from '../layout/responsive';
import { Droppable } from '../Drag/Droppable';
const QuestionLayout = ({
  style,
  type,
  questions = [],
  passageAnswers,
  pos,
  onUnselectePassageAnswer
}: TQuestionLayout) => {
  return (
    <QuestionLayoutWrapper style={style}>
      <Col className="question-box">
        {questions.map((question, index) => {
          return question ? (
            <div
              key={uuid()}
              className="question"
              style={{
                fontSize: type === 'sentence' || type === 'passage' ? 64 : 128,
                fontWeight:
                  type === 'sentence' || type === 'passage' ? 500 : 600
              }}
            >
              {question
                .toString()
                .split(' ')
                .map((value) => {
                  let text = value.split('??');

                  return value.includes('??') ? (
                    <>
                      <Droppable
                        key={uuid()}
                        className="sentence-box"
                        id={index}
                        style={{
                          color: passageAnswers[`${index}`] ? 'black' : '',
                          opacity: passageAnswers[`${index}`] ? 1 : ''
                        }}
                      >
                        <span
                          onClick={() => {
                            onUnselectePassageAnswer(index);
                          }}
                          style={{
                            cursor: passageAnswers[`${index}`] ? 'pointer' : ''
                          }}
                        >
                          {passageAnswers[`${index}`] ?? '???'}
                        </span>
                      </Droppable>
                      {text.join('')}
                    </>
                  ) : (
                    `${value} `
                  );
                })}
            </div>
          ) : (
            ''
          );
        })}
        {type === 'vocabulary' && <div className="pos">{pos}</div>}
        {type === 'sentence' && <div className="pos">{pos}</div>}
      </Col>
    </QuestionLayoutWrapper>
  );
};

export default QuestionLayout;
