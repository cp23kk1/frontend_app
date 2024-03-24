import Icon from '@/components/common/Icon';
import { NewLandingWrapper } from './style';
import { TNewLanding } from './type';

const NewLanding = ({
  onClickBegin,
  onClickTerm,
  onClickPolicy
}: TNewLanding) => {
  return (
    <NewLandingWrapper>
      <div className="main-content">
        <div className="title">VocaVerse</div>
        <div className="subtitle">Expand Your Universe, Word by Word.</div>
        <div className="description">
          Starting to practice basic English language skills <br />
          by building vocabulary is helpful in improving fundamental
          communication abilities.
        </div>
        <div className="begin">
          <div className="button-begin">
            <Icon
              iconName="DoubleArrow"
              size={24}
              style={{ transform: 'rotate(180deg)' }}
            />
            <div onClick={onClickBegin} className="button">
              LET THE GAMES BEGIN
            </div>
            <Icon iconName="DoubleArrow" size={24} />
          </div>
        </div>
      </div>
      <div className="bottom-content">
        <span onClick={onClickTerm}>Terms of Service</span> &nbsp;and&nbsp;
        <span onClick={onClickPolicy}>Privacy Policy</span>
      </div>
    </NewLandingWrapper>
  );
};
export default NewLanding;
