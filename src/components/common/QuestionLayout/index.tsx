import { ReactNode } from 'react';
import { QuestionLayoutWrapper } from './style';
import { TQuestionLayout } from './type';
import { v4 as uuid } from 'uuid';
import { Col } from '../layout/responsive';
import { Droppable } from '../Drag/Droppable';
import { Textfit } from 'react-textfit';
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
                fontSize: type === 'sentence' || type === 'passage' ? 36 : 128,
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
                          opacity: passageAnswers[`${index}`] ? 1 : '',
                          backgroundColor: passageAnswers[`${index}`]
                            ? passageAnswers[`${index}`].state === 'correct'
                              ? 'green'
                              : passageAnswers[`${index}`].state === 'incorrect'
                              ? 'red'
                              : ''
                            : '',
                          cursor: passageAnswers[`${index}`] ? 'pointer' : ''
                        }}
                      >
                        <span
                          key={uuid()}
                          onClick={() => {
                            if (
                              passageAnswers[`${index}`] &&
                              passageAnswers[`${index}`].state != 'normal'
                            ) {
                              return;
                            } else {
                              onUnselectePassageAnswer(index);
                            }
                          }}
                        >
                          {passageAnswers[`${index}`]
                            ? passageAnswers[`${index}`].children
                            : '???'}
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
