import SettingModal from '@/components/common/SettingModal';
import GameMode from '@/components/modules/gamemode/Gamemode';
import GamePlay from '@/components/modules/gameplay/GamePlay';
import Landing from '@/components/modules/landing/Landing';
import LoginModal from '@/components/modules/landing/LoginModal';
import SummaryResult from '@/components/modules/summary/SummaryResult';
import VocaverseCoreContainer from '@/modules/core/VocaverseCoreContainer';
import GameModeContainer from '@/modules/gamemode/GameModeContainer';
import GamePlayContainer from '@/modules/gameplay/GamePlayContainer';
import LandingContainer from '@/modules/landing/LandingContainer';
import SummaryResultContainer from '@/modules/summary/SummaryResultContainer';

export default function Home() {
  return (
    <VocaverseCoreContainer
      render={({ state, onChangeState }) => {
        if (state.state === 'landing') {
          return (
            <LandingContainer
              onChangeState={onChangeState}
              render={({
                onBegin,
                onLogin,
                onSetting,
                onCloseModal,
                onGoogleLogin,
                onGuestLogin,
                isModalLoginOpen
              }) => {
                return (
                  <>
                    <Landing
                      onBegin={onBegin}
                      onSetting={onSetting}
                      onLogin={onLogin}
                    />
                    <LoginModal
                      isModalOpen={isModalLoginOpen}
                      onClickGoogleLogin={onGoogleLogin}
                      onClickGuestLogin={onGuestLogin}
                      onClickPolicy={() => {}}
                      onClickTerm={() => {}}
                      onClose={onCloseModal}
                    />
                  </>
                );
              }}
            />
          );
        }
        if (state.state === 'gameplay') {
          return (
            <GamePlayContainer
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
        if (state.state === 'summary') {
          return (
            <SummaryResultContainer
              onChangeState={onChangeState}
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
        }
        if (state.state === 'gamemode') {
          return (
            <GameModeContainer
              onChangeState={onChangeState}
              render={({ gameModeProps, settingModalProps }) => {
                return (
                  <>
                    <GameMode {...gameModeProps}></GameMode>
                    <SettingModal {...settingModalProps} />
                  </>
                );
              }}
            />
          );
        }
      }}
    />
  );
}
