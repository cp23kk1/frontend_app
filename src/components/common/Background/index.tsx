import { BackGroundImg, BackGroundWrapper } from './style';
import { TBackGround } from './type';

const BackGround = ({ theme, children, childrenStyle, style }: TBackGround) => {
  return (
    <BackGroundWrapper>
      <BackGroundImg
        style={{
          ...style,
          backgroundColor: theme === 'dark' ? 'black' : 'white'
        }}
      >
        {/* <div className="background-cir1">
        <div className="background-cir2">
          <div className="background-cir3">
            <div className="background-cir4">
              <div className="background-cir5">
                <div className="background-cir6"></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
        <img
          className="background"
          src={
            theme === 'dark'
              ? '/background/BackgroundDark.png'
              : '/background/BackgroundLight.png'
          }
          alt=""
        />
        <div
          style={{
            color: childrenStyle?.color || theme === 'dark' ? 'white' : 'black',
            ...childrenStyle
          }}
        >
          {children}
        </div>
      </BackGroundImg>
    </BackGroundWrapper>
  );
};

export default BackGround;
