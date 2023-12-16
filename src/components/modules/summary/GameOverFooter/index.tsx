import Button from '@/components/common/Button';
import { GameOverFooterWrapper } from './style';
import { TGameOverFooter } from './type';

const GameOverFooter = ({ options, style }: TGameOverFooter) => {
  return (
    <GameOverFooterWrapper style={style}>
      {options?.map((option) => {
        return <Button key={option.iconName} {...option}></Button>;
      })}
    </GameOverFooterWrapper>
  );
};

export default GameOverFooter;
