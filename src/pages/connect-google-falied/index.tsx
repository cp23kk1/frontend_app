import ConnectGoogleFailedContainer from '@/modules/core/ConnectGoogleFailedContainer';
import type { NextPage } from 'next';
import React from 'react';

//

const GameMenuPage: NextPage = () => {
  return (
    <ConnectGoogleFailedContainer
      render={() => {
        return (
          <div
            style={{
              backgroundColor: '#0C001B',
              height: '100vh',
              width: '100vw'
            }}
          ></div>
        );
      }}
    />
  );
};
export default GameMenuPage;
