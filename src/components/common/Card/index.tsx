import { getPublicPath } from '@/utils/basePath';
import { CardWrapper } from './style';
import { TCard } from './type';
import Image from 'next/image';

const Card = ({
  onClick,
  modeName,
  modeSubtitle,
  modeIcon,
  isSelected
}: TCard) => {
  return (
    <CardWrapper onClick={onClick} isSelected={isSelected}>
      <div className="card">
        <div className="card-icon">
          <Image
            src={modeIcon ?? getPublicPath('/decorations/PlanetsGameMode2.svg')}
            alt="PlanetsGameMode"
            width={240}
            height={240}
          />
        </div>
        <div className="card-content">
          <div className="mode-name">{modeName}</div>
          {modeSubtitle && <div className="mode-subtitle">{modeSubtitle}</div>}
        </div>
      </div>
    </CardWrapper>
  );
};

export default Card;
