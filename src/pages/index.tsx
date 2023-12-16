import Landing from '@/components/modules/landing/Landing';
import LandingContainer from '@/modules/landing/LandingContainer';

export default function Home() {
  return (
    <LandingContainer
      render={({ onBegin, onLogin, onSetting }) => {
        return (
          <Landing onBegin={onBegin} onSetting={onSetting} onLogin={onLogin} />
        );
      }}
    />
  );
}
