import NewButton from '@/components/common/V2/NewButton';
import { HomeWrapper } from './style';
import { THome } from './type';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuid } from 'uuid';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import PlayButton from '@/components/common/V2/PlayButton';

const HomeMenu = ({ modes }: THome) => {
  return (
    <HomeWrapper>
      <div className="top">
        <div className="vocaverse">Vocaverse</div>
        <div className="menu">
          <div>HOME</div>
          <div>LEADERBOARD</div>
          <div>HISTORY</div>
          <div>ITEM & DECORATION</div>
        </div>
        <div className="corner-button">
          <NewButton
            label="SIGN IN"
            iconName="SignIn"
            state="unselected"
            onClick={() => {}}
          />
          <NewButton
            label="SETTING"
            iconName="SettingLight"
            state="unselected"
            onClick={() => {}}
          />
        </div>
      </div>
      <div className="content">
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
        >
          {modes.map((mode) => {
            return (
              <SwiperSlide key={`SwiperSlide-${uuid()}`}>
                {}
                <div className="carousel-card mode">
                  <div className="mode-content">
                    <div className="mode-name">{mode.modeName}</div>
                    <div className="mode-description">{mode.modeDesc}</div>
                    <div className="mode-extra-info">{mode.modeExtraInfo}</div>
                    <div className="mode-button">
                      {mode.modeButtons.map((button) => {
                        return (
                          <PlayButton
                            iconName={button.iconName}
                            text={button.text}
                            onClick={button.onClick}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="mode-img"></div>
                </div>
              </SwiperSlide>
            );
          })}

          <SwiperSlide key={`SwiperSlide-${uuid()}`}>
            <div className="carousel-card comming-soon">COMING SOON...</div>
          </SwiperSlide>
        </Swiper>
        <div className="tutorial">Tutorials</div>
      </div>
    </HomeWrapper>
  );
};
export default HomeMenu;
