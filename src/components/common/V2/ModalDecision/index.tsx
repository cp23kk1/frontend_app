import { ModalDecisionWrapper } from './style';
import { TModalDecision } from './type';

const ModalDecision = ({ question, onClick }: TModalDecision) => {
  return (
    <ModalDecisionWrapper>
      <div className="content">{question}</div>
      <div className="buttons">
        <div
          onClick={() => {
            onClick(true);
          }}
          className="yes"
        >
          asdfasdf
        </div>
        <div
          onClick={() => {
            onClick(false);
          }}
          className="no"
        >
          asdfasdfs
        </div>
      </div>
    </ModalDecisionWrapper>
  );
};

export default ModalDecision;
