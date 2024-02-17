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
      render={({ state, onChangeState, onSetting, settingModal }) => {
        if (state.page === 'landing') {
          return (
            <LandingContainer
              onChangeState={onChangeState}
              render={({ onBegin, onLogin }) => {
                return (
                  <>
                    <Landing
                      onBegin={onBegin}
                      onSetting={onSetting}
                      onLogin={onLogin}
                    />

                    <SettingModal {...settingModal} />
                  </>
                );
              }}
            />
          );
        }
        if (state.page === 'gamemode') {
          return (
            <GameModeContainer
              state={state}
              onChangeState={onChangeState}
              render={({ gameModeProps }) => {
                return (
                  <>
                    <GameMode
                      {...gameModeProps}
                      onClickSetting={onSetting}
                    ></GameMode>
                    <SettingModal {...settingModal} />
                  </>
                );
              }}
            />
          );
        }
        if (state.page === 'gameplay') {
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
        if (state.page === 'summary') {
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
        }
      }}
    />
  );
}
