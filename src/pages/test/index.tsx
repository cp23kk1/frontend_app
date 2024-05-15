import { Fragment, useEffect } from 'react';
import type { NextPage } from 'next';
//
import WebsocketContainer from '@/modules/test/web-socket-core/WebsocketContainer';
import { DataWebSocket } from '@/modules/test/web-socket-core/type';

import { v4 as uuid } from 'uuid';
import { getGoogleUrl } from '@/utils/getGoogleUrl';
import { useRouter } from 'next/router';

const MainPage: NextPage = () => {
  return (
    <WebsocketContainer
      traderId="asdf"
      render={({
        msg,
        log,
        name,
        isConnect,
        lobby,
        roomId,
        googleClientId,
        profile,
        onGoogleLogout,
        onGoogleLoginFailure,
        onGoogleLoginSuccess,
        onSubmit,
        onConnect,
        onCloseConnection,
        onChangeMsg,
        onChangeName,
        onChangeRoomId,
        onGetLobby
      }: DataWebSocket) => {
        const router = useRouter();

        let from = router.pathname || '/';
        // const handleCallbackResponse = (response: CredentialResponse) => {
        //   console.log(response);
        // };
        useEffect(() => {
          //   // google.accounts.id.initialize({
          //   //   client_id: googleClientId,
          //   //   callback: handleCallbackResponse
          //   // });
          //   // google.accounts.id.renderbutton(
          //   //   document.getElementById('google_login') ||
          //   //     document.createElement('div'),
          //   //   {
          //   //     theme: 'outline',
          //   //     size: 'large'
          //   //   }
          //   // );
          //   // google.accounts.id.prompt();
        }, []);
        return (
          <Fragment>
            <div>React Google Login</div>
            <a href={getGoogleUrl(from)}>Google</a>

            <div
              style={{
                padding: '10px',
                overflowY: 'scroll',
                height: '100%'
              }}
            >
              {log.map((value, index) => {
                return (
                  <div
                    key={uuid()}
                    style={{
                      textAlign:
                        value.from === name
                          ? 'right'
                          : value.from === 'system'
                          ? 'center'
                          : 'left',
                      fontWeight: value.from === 'system' ? 'bold' : 'normal'
                    }}
                  >
                    {value.from !== name &&
                      value.from !== 'system' &&
                      `${value.from}: `}{' '}
                    {value.msg}
                  </div>
                );
              })}
            </div>
            <div style={{ position: 'fixed', width: '100%', bottom: 0 }}>
              {!isConnect && (
                <div>
                  <input
                    type="text"
                    placeholder="roomId"
                    disabled={!name}
                    onChange={(e) => onChangeRoomId(e.target.value)}
                  />
                  <button
                    disabled={!name || !roomId}
                    onClick={() => {
                      onConnect('', roomId);
                      onChangeRoomId('');
                    }}
                  >
                    Connect
                  </button>
                </div>
              )}

              <button onClick={onGetLobby}>Get lobby</button>
              <input
                type="text"
                placeholder="msg"
                value={msg}
                onChange={(e) => onChangeMsg(e.target.value)}
              />
              <input
                type="text"
                placeholder="name"
                value={name}
                disabled={isConnect}
                onChange={(e) => onChangeName(e.target.value)}
              />
              <button onClick={onSubmit} style={{ color: 'var(--red)' }}>
                Submit
              </button>
              <button onClick={onCloseConnection}>closeConnection</button>
            </div>
          </Fragment>
        );
      }}
    />
  );
};

export default MainPage;
