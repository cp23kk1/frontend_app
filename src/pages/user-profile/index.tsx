import JoinCreateLobby from '@/components/modules/V2/lobby/JoinCreateLobby';
import Lobby from '@/components/modules/V2/lobby/Lobby';
import UserProfile from '@/components/modules/V2/profile/UserProfile';
import { NextPage } from 'next';

const UserProfilePage: NextPage = () => {
  return (
    <UserProfile
      onClickSetting={function (): void {
        throw new Error('Function not implemented.');
      }}
      onChangeMode={function (input: 'account' | 'stats'): void {
        throw new Error('Function not implemented.');
      }}
      {...{
        account: {
          onConfirm: () => {},
          editedDisplayName: '',
          isEditMode: false,
          onChangeDisplayName: (input) => {},
          onChangeEditMode: () => {},
          displayName: '',
          email: '',
          since: '',
          onSingOut: () => {},
          profilePic: ''
        },
        mode: 'account',
        stats: {
          barStats: [
            { maxScore: '1000', score: '750', progress: '75', title: 'Noun' },
            { maxScore: '1000', score: '750', progress: '75', title: 'Noun' },
            { maxScore: '1000', score: '750', progress: '75', title: 'Noun' },
            { maxScore: '1000', score: '750', progress: '75', title: 'Noun' },
            { maxScore: '1000', score: '750', progress: '75', title: 'Noun' },
            { maxScore: '1000', score: '750', progress: '75', title: 'Noun' }
          ],
          overAllAcc: '75',
          overAllMaxScore: '1000',
          overAllScore: '750',
          vocabularyAcc: '75',
          vocabularyMaxScore: '1000',
          vocabularyScore: '750',
          passageAcc: '75',
          passageMaxScore: '1000',
          passageScore: '750',
          sentenceAcc: '75',
          sentenceMaxScore: '1000',
          sentenceScore: '750'
        },
        onClickBack: () => {}
      }}
    />
  );
};
export default UserProfilePage;
