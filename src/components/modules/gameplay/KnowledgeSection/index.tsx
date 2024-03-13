import QuestionLayout from '@/components/common/QuestionLayout';
import { KnowLedgeSectionWrapper } from './style';
import { TKnowLedgeSection } from './type';
import AnswerButton from '@/components/common/AnswerButton';
import { ReactNode } from 'react';
import { Col } from '@/components/common/layout/responsive';
import { v4 as uuid } from 'uuid';
import { DndContext } from '@dnd-kit/core';
import { Draggable } from '@/components/common/Drag/Draggable';

const KnowLedgeSection = ({
  style,
  type,
  question,
  pos,
  answers,
  passageAnswers,
  onAnswer,
  onUnselectePassageAnswer,
  onDragEnd
}: TKnowLedgeSection) => {
  const _handleAnswer = (meaning: string, correctness: boolean) => {
    onAnswer(meaning, correctness);
  };
  return (
    <DndContext onDragEnd={onDragEnd}>
      <KnowLedgeSectionWrapper style={style}>
        <QuestionLayout
          questions={question}
          pos={pos ?? ''}
          type={type}
          passageAnswers={passageAnswers}
          onUnselectePassageAnswer={onUnselectePassageAnswer}
        />

        {type === 'passage' ? (
          <div className="answer-layout">
            {answers.map((answer, index) => {
              return (
                <Col
                  span={14 / answers.length}
                  className="answer-wrapper"
                  key={uuid()}
                >
                  <Draggable
                    data={{
                      children: answer.children,
                      correctness: answer.correctness
                    }}
                    id={answer.children}
                  >
                    <AnswerButton
                      {...answer}
                      onClick={() => {
                        _handleAnswer(answer.children, answer.correctness);
                      }}
                    />
                  </Draggable>
                </Col>
              );
            })}
          </div>
        ) : (
          <div className="answer-layout">
            {answers.map((answer, index) => {
              return (
                <Col
                  span={14 / answers.length}
                  className="answer-wrapper"
                  key={uuid()}
                >
                  <AnswerButton
                    {...answer}
                    onClick={() => {
                      _handleAnswer(answer.children, answer.correctness);
                    }}
                  />
                </Col>
              );
            })}
          </div>
        )}
      </KnowLedgeSectionWrapper>
    </DndContext>
  );
};

export default KnowLedgeSection;
