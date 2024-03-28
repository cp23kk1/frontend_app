import Icon from '@/components/common/Icon';
import { UserProfileWrapper } from './style';
import { TUserProfile } from './type';
import NewButton from '@/components/common/V2/NewButton';
import CircleProgress from '@/components/common/V2/CircleProgress';
import CardProgress from '@/components/common/V2/CardProgress';
import { v4 as uuid } from 'uuid';
const UserProfile = ({
  onClickBack,
  onClickSetting,
  account,
  mode,
  stats
}: TUserProfile) => {
  return (
    <UserProfileWrapper>
      <div className="top-content">
        <div className="back-button button">
          <NewButton
            iconName="Back"
            style={{ width: 'fit-content' }}
            label="BACK"
            onClick={onClickBack}
          />
        </div>

        <div className="topic">Profile</div>

        <div className="play-quick-button button">
          <NewButton
            iconName="SettingLight"
            style={{ width: 'fit-content' }}
            label="SETTING"
            onClick={onClickSetting}
          />
        </div>
      </div>
      <div className="main-content">
        <div className="page-mode">
          <div className="mode">
            <NewButton
              state={mode === 'account' ? 'selected' : 'unselected'}
              label={'ACCOUNT'}
              onClick={() => {}}
            />
          </div>
          <div className="mode">
            <NewButton
              state={mode === 'stats' ? 'selected' : 'unselected'}
              label={'STATISTICS'}
              onClick={() => {}}
            />
          </div>
        </div>
        <div className="changeable-content">
          {mode === 'account' ? (
            <div className="account">
              <div className="profile-card">
                <div className="user-card">
                  <div className="user-info">
                    <img
                      className="profile-pic"
                      src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                      alt=""
                    />
                    <div className="display-name">asfasdfasdfasdfasdf</div>
                  </div>
                  <div className="edit">Edit</div>
                </div>
                <div className="associate">
                  <div className="google-card">
                    <div className="topic">
                      <Icon size={24} iconName={'GoogleWithBG'} />
                      Authentication with Google
                    </div>
                    <div className="email">testing_user@gmail.com</div>
                  </div>
                </div>
                <div className="bottom-card">
                  Member since Jan, 1 2024
                  <NewButton
                    style={{ width: 'fit-content' }}
                    onClick={() => {}}
                    label="SIGN OUT"
                    iconName="Exit"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="overall-stats">
              <div className="divided-stats">
                <div className="circle-stats">
                  <div className="overall-accuracy">
                    <div className="pie-chart">
                      <CircleProgress
                        size={200}
                        color="#45ca9a"
                        progress={stats.overAllAcc}
                        key="overall"
                      />
                      <div className="score">
                        <span className="correct-answers">
                          {stats.overAllScore}
                        </span>
                        /{stats.overAllMaxScore}
                      </div>
                    </div>
                    <div className="detail">
                      <div className="topic">OVERALL ACCURACY</div>
                      <div className="overall-percent">{stats.overAllAcc}%</div>
                    </div>
                  </div>
                  <div className="sperated-accuracy">
                    <div className="vocabulary-accuracy card">
                      <div className="topic">Vocabulary</div>
                      <div className="small-chart">
                        <CircleProgress
                          size={120}
                          key="vocab"
                          color="#F8D34D"
                          progress={stats.vocabularyAcc}
                        />

                        <div className="percent">{stats.vocabularyAcc}%</div>
                      </div>
                      <div className="score">
                        <span className="correct-answers">
                          {stats.vocabularyScore}
                        </span>{' '}
                        /{stats.vocabularyMaxScore}
                      </div>
                    </div>
                    <div className="vocabulary-accuracy card">
                      <div className="topic">Sentence</div>
                      <div className="small-chart">
                        <CircleProgress
                          size={120}
                          color="#7293E4"
                          progress={stats.sentenceAcc}
                          key="sentence"
                        />

                        <div className="percent">{stats.sentenceAcc}%</div>
                      </div>
                      <div className="score">
                        <span className="correct-answers">
                          {stats.sentenceScore}
                        </span>{' '}
                        /{stats.sentenceMaxScore}
                      </div>
                    </div>
                    <div className="vocabulary-accuracy card">
                      <div className="topic">Passage</div>
                      <div className="small-chart">
                        <CircleProgress
                          size={120}
                          color="#CC4949"
                          progress={stats.passageAcc}
                          key="passage"
                        />
                        <div className="percent">{stats.passageAcc}%</div>
                      </div>
                      <div className="score">
                        <span className="correct-answers">
                          {stats.passageScore}
                        </span>{' '}
                        /{stats.passageMaxScore}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bar-stats">
                  <div className="topic">PART OF SPEECH ACCURACY</div>
                  {stats.barStats.map((value) => {
                    return <CardProgress key={uuid()} {...value} />;
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </UserProfileWrapper>
  );
};
export default UserProfile;
