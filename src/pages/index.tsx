import SettingModal from '@/components/common/SettingModal';
import GameMode from '@/components/modules/gamemode/Gamemode';
import GamePlay from '@/components/modules/gameplay/GamePlay';
import Landing from '@/components/modules/landing/Landing';
import LoginModal from '@/components/modules/landing/LoginModal';
import SummaryResult from '@/components/modules/summary/SummaryResult';
import HomeMenu from '@/components/modules/V2/home-menu/HomeMenu';
import NewLanding from '@/components/modules/V2/landing/NewLanding';
import JoinCreateLobby from '@/components/modules/V2/lobby/JoinCreateLobby';
import Lobby from '@/components/modules/V2/lobby/Lobby';
import MultiplayerGameplay from '@/components/modules/V2/multiplayer/MultiplayerGameplay';
import MultiplayerResult from '@/components/modules/V2/multiplayer/MultiPlayerResult';
import UserProfile from '@/components/modules/V2/profile/UserProfile';
import VocaverseCoreContainer from '@/modules/core/VocaverseCoreContainer';
import GameMenuContainer from '@/modules/gamemenu/GameMenuContainer';
import GameModeContainer from '@/modules/gamemode/GameModeContainer';
import GamePlayContainer from '@/modules/gameplay/GamePlayContainer';
import LandingContainer from '@/modules/landing/LandingContainer';
import NewLandingContainer from '@/modules/landing/NewLandingContainer';
import JoinCreateLobbyContainer from '@/modules/multiplayer/lobby/JoinCreateLobbyContainer';
import LobbyContainer from '@/modules/multiplayer/lobby/LobbyContainer';
import MultiplayerGameplayContainer from '@/modules/multiplayer/MultiplayerGameplayContainer';
import MultiplayerResultContainer from '@/modules/multiplayer/MultiplayerResultContainer';
import SummaryResultContainer from '@/modules/summary/SummaryResultContainer';
import UserProfileContainer from '@/modules/user-profile/UserProfileContainer';

export default function Home() {
  return (
    <VocaverseCoreContainer
      render={({ state, onChangeState, onSetting, settingModal }) => {
        switch (state.page) {
          case 'landing':
            return (
              <NewLandingContainer
                onChangeState={onChangeState}
                render={({ onBegin }) => {
                  return (
                    <NewLanding
                      {...{
                        onClickBegin: onBegin,
                        onClickPolicy: () => {},
                        onClickTerm: () => {}
                      }}
                    />
                  );
                }}
              />
            );
          case 'gamemode': {
            return (
              <GameMenuContainer
                state={state}
                onChangeState={onChangeState}
                render={(props) => {
                  return <HomeMenu {...props} />;
                }}
              />
            );
          }
          case 'gameplay': {
            return (
              <GamePlayContainer
                state={state}
                onChangeState={onChangeState}
                render={({
                  knowLedgeSection,
                  animationSection,
                  score,
                  onPause
                }) => {
                  return (
                    <GamePlay
                      knowledgeSectionItem={knowLedgeSection}
                      score={score}
                      onPause={onPause}
                      animationSectionItem={animationSection}
                    />
                  );
                }}
              />
            );
          }
          case 'summary':
            return (
              <SummaryResultContainer
                onChangeState={onChangeState}
                state={state}
                render={({
                  mode,
                  bestScore,
                  currentScore,
                  summarySection,
                  options
                }) => {
                  return (
                    <SummaryResult
                      mode={mode}
                      bestScore={bestScore}
                      currentScore={currentScore}
                      result={summarySection}
                      footer={options}
                    />
                  );
                }}
              />
            );
          case 'host-lobby':
            return (
              <JoinCreateLobbyContainer
                onChangeState={onChangeState}
                state={state}
                render={(props) => {
                  return <JoinCreateLobby {...props} />;
                }}
              />
            );
          case 'user-profile':
            return (
              <UserProfileContainer
                onChangeState={onChangeState}
                state={state}
                render={(props) => {
                  return <UserProfile {...props} />;
                }}
              />
            );
          case 'lobby':
            return (
              <LobbyContainer
                state={state}
                onChangeState={onChangeState}
                render={(props) => {
                  return <Lobby {...props} />;
                }}
              />
            );
          case 'multiplay-gameplay':
            return (
              <MultiplayerGameplayContainer
                onChangeState={onChangeState}
                state={state}
                render={(props) => {
                  return <MultiplayerGameplay {...props} />;
                }}
              />
            );
          case 'multiplayer-result':
            return (
              <MultiplayerResultContainer
                onChangeState={onChangeState}
                state={state}
                render={(props) => {
                  return <MultiplayerResult {...props} />;
                }}
              />
            );
        }
        //   if (state.page === 'landing') {
        //     return (
        //       <LandingContainer
        //         onChangeState={onChangeState}
        //         render={({
        //           onBegin,
        //           onLogin,
        //           userProfile,
        //           onClickLogout,
        //           onClickProfile
        //         }) => {
        //           return (
        //             <>
        //               <Landing
        //                 onBegin={onBegin}
        //                 onSetting={onSetting}
        //                 onLogin={onLogin}
        //                 userProfile={userProfile}
        //                 onClickLogout={onClickLogout}
        //                 onClickProfile={onClickProfile}
        //               />

        //               <SettingModal {...settingModal} />
        //             </>
        //           );
        //         }}
        //       />
        //     );
        //   }
        //   if (state.page === 'gamemode') {
        //     return (
        //       <GameModeContainer
        //         state={state}
        //         onChangeState={onChangeState}
        //         render={({ gameModeProps }) => {
        //           return (
        //             <>
        //               <GameMode
        //                 {...gameModeProps}
        //                 onClickSetting={onSetting}
        //               ></GameMode>
        //               <SettingModal {...settingModal} />
        //             </>
        //           );
        //         }}
        //       />
        //     );
        //   }
        //   if (state.page === 'gameplay') {
        //     return (
        //       <GamePlayContainer
        //         state={state}
        //         onChangeState={onChangeState}
        //         render={({
        //           knowLedgeSection,
        //           animationSection,
        //           score,
        //           onPause
        //         }) => {
        //           return (
        //             <GamePlay
        //               knowledgeSectionItem={knowLedgeSection}
        //               score={score}
        //               onPause={onPause}
        //               animationSectionItem={animationSection}
        //             />
        //           );
        //         }}
        //       />
        //     );
        //   }
        //   if (state.page === 'summary') {
        //     return (
        //       <SummaryResultContainer
        //         onChangeState={onChangeState}
        //         state={state}
        //         render={({
        //           mode,
        //           bestScore,
        //           currentScore,
        //           summarySection,
        //           options
        //         }) => {
        //           return (
        //             <SummaryResult
        //               mode={mode}
        //               bestScore={bestScore}
        //               currentScore={currentScore}
        //               result={summarySection}
        //               footer={options}
        //             />
        //           );
        //         }}
        //       />
        //     );
        //   }
      }}
    />
  );
}
