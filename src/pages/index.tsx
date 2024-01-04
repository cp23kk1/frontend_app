import GamePlay from '@/components/modules/gameplay/GamePlay';
import Landing from '@/components/modules/landing/Landing';
import SummaryResult from '@/components/modules/summary/SummaryResult';
import VocaverseCoreContainer from '@/modules/core/VocaverseCoreContainer';
import GamePlayContainer from '@/modules/gameplay/GamePlayContainer';
import LandingContainer from '@/modules/landing/LandingContainer';
import SummaryResultContainer from '@/modules/summary/SummaryResultContainer';

export default function Home() {
  return (
    <VocaverseCoreContainer
      render={({ state, onChangeState }) => {
        if (state === 'landing') {
          return (
            <LandingContainer
              onChangeState={onChangeState}
              render={({ onBegin, onLogin, onSetting }) => {
                return (
                  <Landing
                    onBegin={onBegin}
                    onSetting={onSetting}
                    onLogin={onLogin}
                  />
                );
              }}
            />
          );
        }
        if (state === 'gameplay') {
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
        if (state === 'summary') {
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
      }}
    />
  );
}
