import { Swiper, SwiperSlide } from 'swiper/react';
import { TModalTutorial } from './type';
import { v4 as uuid } from 'uuid';
import { Navigation, Pagination } from 'swiper/modules';
import { ModalTutorialWrapper } from './style';

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
          <div key={uuid()} className="carousel-card mode"></div>
        </SwiperSlide>
        <SwiperSlide key={`SwiperSlide-${uuid()}`}>
          <div key={uuid()} className="carousel-card mode"></div>
        </SwiperSlide>
        <SwiperSlide key={`SwiperSlide-${uuid()}`}>
          <div key={uuid()} className="carousel-card mode"></div>
        </SwiperSlide>
      </Swiper>
    </ModalTutorialWrapper>
  );
};

export default ModalTutorial;
