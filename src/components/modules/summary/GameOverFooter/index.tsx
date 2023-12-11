import Button from '@/components/common/Button';
import { GameOverFooterWrapper } from './style';
import { TGameOverFooter } from './type';

const GameOverFooter = ({ options, style }: TGameOverFooter) => {
  return (
    <GameOverFooterWrapper style={style}>
      {options?.map((option) => {
        return <Button {...option}></Button>;
      })}
    </GameOverFooterWrapper>
  );
};

export default GameOverFooter;
