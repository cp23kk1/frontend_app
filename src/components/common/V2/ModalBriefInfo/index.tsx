import { Swiper, SwiperSlide } from 'swiper/react';
import { TModalBriefInfo } from './type';
import { v4 as uuid } from 'uuid';
import { Navigation, Pagination } from 'swiper/modules';
import { ModalBriefInfoWrapper } from './style';

const ModalBriefInfo = ({
  definition,
  meaning,
  example,
  word,
  pos
}: TModalBriefInfo) => {
  return (
    <ModalBriefInfoWrapper>
      <div className="topic">
        <div className="modal-topic">{word}</div>
      </div>
      <div className="content">
        <div className="pos">
          {pos.map((value) => {
            return (
              <div className={`button ${value.isSelected ? 'selected' : ''}`}>
                {value.pos}
              </div>
            );
          })}
        </div>
        <div className="main">
          <div>Definition</div>
          <div className="main-content">{definition}</div>
          <div>Meaning</div>
          <div className="main-content">{meaning}</div>
          Example of usage
          <div className="main-content">{example}</div>
        </div>
      </div>
    </ModalBriefInfoWrapper>
  );
};

export default ModalBriefInfo;
