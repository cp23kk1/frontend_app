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
  onChangeMode,
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
              onClick={() => {
                onChangeMode('account');
              }}
            />
          </div>
          <div className="mode">
            <NewButton
              state={mode === 'stats' ? 'selected' : 'unselected'}
              label={'STATISTICS'}
              onClick={() => {
                onChangeMode('stats');
              }}
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
                      src={account.profilePic}
                      alt=""
                    />
                    {account.isEditMode ? (
                      <div className="edit-mode">
                        <div>
                          <input
                            type="text"
                            value={account.editedDisplayName}
                            onChange={account.onChangeDisplayName}
                            maxLength={255}
                            style={{
                              border:
                                account.editedDisplayName.length === 0
                                  ? '5px solid red'
                                  : ''
                            }}
                          />
                          {account.editedDisplayName.length === 0 && (
                            <div style={{ color: 'red', fontSize: 26 }}>
                              Displayname can't be empty.
                            </div>
                          )}
                        </div>

                        <div className="confirm-button">
                          <NewButton
                            label={'CONFIRM'}
                            onClick={account.onConfirm}
                            disable={
                              account.editedDisplayName.length === 0 ||
                              account.editedDisplayName === account.displayName
                            }
                          />

                          <NewButton
                            label={'CANCEL'}
                            onClick={account.onChangeEditMode}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="display-name">{account.displayName}</div>
                    )}
                  </div>
                  {!account.isEditMode && (
                    <div className="edit" onClick={account.onChangeEditMode}>
                      Edit
                    </div>
                  )}
                </div>
                <div className="associate">
                  <div className="google-card">
                    <div className="topic">
                      <Icon size={24} iconName={'GoogleWithBG'} />
                      Authentication with Google
                    </div>
                    <div className="email">{account.email}</div>
                  </div>
                </div>
                <div className="bottom-card">
                  {account.since}
                  <NewButton
                    style={{ width: 'fit-content' }}
                    onClick={account.onSingOut}
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
