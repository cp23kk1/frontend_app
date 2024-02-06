import { ReactNode, useEffect, useState } from 'react';

export const LandingContainer = ({
  render
}: {
  render: (props: TVocaverseCore) => ReactNode;
}) => {
  const [state, setState] = useState<TState>({ page: 'landing' });
  const onChangeState = (inputState: TState) => {
    setState(inputState);
  };

  return render({
    state,
    onChangeState
  });
};

export type TState = {
  page: 'landing' | 'gameplay' | 'summary' | 'gamemode';
  data?: any;
};
export type TVocaverseCore = {
  state: TState;
  onChangeState: (input: TState) => void;
};
export default LandingContainer;
