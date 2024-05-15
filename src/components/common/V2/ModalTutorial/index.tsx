import { Swiper, SwiperSlide } from 'swiper/react';
import { TModalTutorial } from './type';
import { v4 as uuid } from 'uuid';
import { Navigation, Pagination } from 'swiper/modules';
import { ModalTutorialWrapper } from './style';
import { getPublicPath } from '@/utils/basePath';

const ModalTutorial = () => {
  return (
    <ModalTutorialWrapper>
      <div className="topic">TUTORIALS</div>
      <Swiper
        modules={[Navigation, Pagination]}
        className="carousel"
        // centeredSlides slidesPerView={1}
        effect={'coverflow'}
        loop
        centeredSlides={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        allowTouchMove={false}
        navigation={true}
        pagination={{ clickable: true }}
        slidesPerGroupSkip={0}
      >
        <SwiperSlide key={`SwiperSlide-${uuid()}`}>
          <img
            src={getPublicPath('/decorations/tutorial1.png')}
            alt="tutorial1"
            key={uuid()}
            className="carousel-card mode"
          />
        </SwiperSlide>
        <SwiperSlide key={`SwiperSlide-${uuid()}`}>
          <img
            src={getPublicPath('/decorations/tutorial2.png')}
            alt="tutorial2"
            key={uuid()}
            className="carousel-card mode"
          />
        </SwiperSlide>
        <SwiperSlide key={`SwiperSlide-${uuid()}`}>
          <img
            src={getPublicPath('/decorations/tutorial3.png')}
            alt="tutorial3"
            key={uuid()}
            className="carousel-card mode"
          />
        </SwiperSlide>
      </Swiper>
    </ModalTutorialWrapper>
  );
};

export default ModalTutorial;
