import NewButton from '@/components/common/V2/NewButton';
import { HomeWrapper } from './style';
import { THome } from './type';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuid } from 'uuid';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import PlayButton from '@/components/common/V2/PlayButton';
import NewProfileTab from '@/components/common/V2/NewProfileTab';
import Icon from '@/components/common/Icon';
import { getPublicPath } from '@/utils/basePath';

const HomeMenu = ({
  modes,
  currentPage,
  onChangePage,
  onClickSignIn,
  onCLickSettings,
  onClickTutorial,
  leaderBoard,
  profileTab,
  listCharacter,
  currentCharacter,
  selectedCharacter,
  onChangeCharacter,
  onSelectCharacter
}: THome) => {
  return (
    <HomeWrapper>
      <div className="top">
        <div className="vocaverse">Vocaverse</div>
        <div className="menu">
          <div
            onClick={() => onChangePage('home')}
            className={currentPage === 'home' ? 'selected' : ''}
          >
            HOME
          </div>
          <div
            onClick={() => onChangePage('leaderboard')}
            className={currentPage === 'leaderboard' ? 'selected' : ''}
          >
            LEADERBOARD
          </div>
          {/* <div
            onClick={() => onChangePage('history')}
            className={currentPage === 'history' ? 'selected' : ''}
          >
            HISTORY
          </div> */}
          <div
            onClick={() => onChangePage('item')}
            className={currentPage === 'item' ? 'selected' : ''}
          >
            CHARACTER CUSTOMIZATION
          </div>
        </div>
        <div className="corner-button">
          {profileTab?.userName ? (
            <NewProfileTab {...profileTab} />
          ) : (
            <NewButton
              label="SIGN IN"
              iconName="SignIn"
              state="unselected"
              onClick={onClickSignIn}
            />
          )}

          <NewButton
            label="SETTING"
            iconName="SettingLight"
            state="unselected"
            onClick={onCLickSettings}
          />
        </div>
      </div>
      <div className="content">
        {currentPage === 'home' && (
          <>
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
              {modes.map((mode) => {
                return (
                  <SwiperSlide key={`SwiperSlide-${uuid()}`}>
                    <div key={uuid()} className="carousel-card mode">
                      <div className="mode-content">
                        <div className="mode-name">{mode.modeName}</div>
                        <div className="mode-description">{mode.modeDesc}</div>
                        <div className="mode-extra-info">
                          {mode.modeExtraInfo}
                        </div>
                        <div className="mode-button">
                          {mode.modeButtons.map((button) => {
                            return (
                              <PlayButton
                                key={uuid()}
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
          </>
        )}
        {currentPage === 'leaderboard' && (
          <>
            <div className="leaderboard">
              <div className="topic">WEEKLY LEADERBOARD</div>
              <div className="list">
                {leaderBoard &&
                  leaderBoard.listPlayer.map((player, index) => {
                    switch (index) {
                      case 0:
                        return (
                          <div className="row no1">
                            <div className="rank">
                              <Icon iconName="LeaderCrown" />
                            </div>
                            <div className="pic">
                              <img
                                src={player.img}
                                className="profile-pic"
                                alt=""
                              />
                            </div>
                            <div className="display-name">
                              <p>{player.displayName}</p>
                            </div>
                            <span className="score">
                              {player.score}
                              <span className="points">&nbsp;points</span>
                            </span>
                          </div>
                        );
                      case 1:
                        return (
                          <div className="row no2">
                            <div className="rank">
                              <Icon iconName="Second" />
                            </div>
                            <div className="pic">
                              <img
                                src={player.img}
                                className="profile-pic"
                                alt=""
                              />
                            </div>
                            <div className="display-name">
                              {player.displayName}
                            </div>
                            <span className="score">
                              {player.score}
                              <span className="points">&nbsp;points</span>
                            </span>
                          </div>
                        );
                      case 2:
                        return (
                          <div className="row no3">
                            <div className="rank">
                              <Icon iconName="Third" />
                            </div>
                            <div className="pic">
                              <img
                                src={player.img}
                                className="profile-pic"
                                alt=""
                              />
                            </div>
                            <div className="display-name">
                              {player.displayName}
                            </div>
                            <span className="score">
                              {player.score}
                              <span className="points">&nbsp;points</span>
                            </span>
                          </div>
                        );
                      default:
                        return (
                          <div className="row">
                            <div className="rank">{++index}</div>
                            <div className="pic">
                              <img
                                src={player.img}
                                className="profile-pic"
                                alt=""
                              />
                            </div>
                            <div className="display-name">
                              {player.displayName}
                            </div>
                            <span className="score">
                              {player.score}
                              <span className="points">&nbsp;points</span>
                            </span>
                          </div>
                        );
                    }
                  })}
              </div>
              <div className="bottom">
                <div className="row current-player">
                  <div className="rank"></div>
                  <div className="pic">
                    <img
                      src={leaderBoard.currentPlayer.img}
                      className="profile-pic"
                      alt=""
                    />
                  </div>
                  <div className="display-name">
                    {leaderBoard.currentPlayer.displayName}
                  </div>
                  <span className="score">
                    {leaderBoard.currentPlayer.score}
                    <span className="points">&nbsp;points</span>
                  </span>
                </div>
                <div className="filter">
                  <div className="left-dropdown-wrapper">
                    <div className="week-dropdown">
                      <div className="custom-select">
                        <select>
                          <option value="week1">WEEK:1</option>
                        </select>
                      </div>
                    </div>
                    <div className="selected-week">1 JAN 2024 - 1 JAN 2025</div>
                  </div>
                  <div className="mode-dropdown">
                    <div className="custom-select">
                      <select>
                        <option value="week1">MODE: SINGLEPLAYER</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {currentPage === 'item' && (
          <div className="character-selection">
            <div className="current-character">
              <img src={getPublicPath(currentCharacter)} alt="player" />
              <NewButton
                disable={selectedCharacter === currentCharacter}
                label={
                  selectedCharacter === currentCharacter ? 'SELECTED' : 'SELECT'
                }
                onClick={() => {
                  onSelectCharacter(currentCharacter);
                }}
              />
            </div>
            <div className="list-character">
              {listCharacter.map((value) => {
                return (
                  <img
                    src={getPublicPath(value)}
                    alt="character"
                    key={uuid()}
                    className={value === currentCharacter ? 'selected' : ''}
                    onClick={() => {
                      onChangeCharacter(value);
                    }}
                  />
                );
              })}
            </div>
          </div>
        )}
        <div onClick={onClickTutorial} className="tutorial">
          Tutorials
        </div>
      </div>
    </HomeWrapper>
  );
};
export default HomeMenu;
