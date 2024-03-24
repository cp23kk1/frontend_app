import ChoiceAnswer from '@/components/common/V2/ChoiceAnswer';
import { ListPlayerWrapper } from './style';
import { TListPlayer } from './type';
import PlayerCard from '@/components/common/V2/PlayerCard';
import Icon from '@/components/common/Icon';

const ListPlayer = ({ players, maxPlayer }: TListPlayer) => {
  return (
    <ListPlayerWrapper>
      <div className="num-player">
        <Icon
          color={'#262956'}
          size={24}
          iconName={'UserIcon'}
          className="icon"
        />
        {`${players.length}/${maxPlayer}`}
      </div>
      {players &&
        players.map((player) => {
          return <PlayerCard {...player} />;
        })}
    </ListPlayerWrapper>
  );
};

export default ListPlayer;
