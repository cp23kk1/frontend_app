// import { TContainerProps } from '@root/types/Container';
import { ReactNode, useEffect, useState } from 'react';
import { DataWebSocket, Massage } from './type';
// import jwt from 'jwt-decode';
// import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '@/hooks';
import {
  dispatch as webSocketDispatch,
  selectors as webSocketSelectors
} from '.';
import { v4 as uuid } from 'uuid';
// import {
//   GoogleLoginResponse,
//   GoogleLoginResponseOffline
// } from 'react-google-login';
// import { CredentialResponse, googleLogout } from '@react-oauth/google';

const WebsocketContainer = ({
  render,
  traderId
}: {
  render: (props?: any) => any;
  traderId?: string;
}) => {
  const googleClientId =
    '1067420759685-7atq3bssi9t00p4g2c7ue7n5cgm9403e.apps.googleusercontent.com';
  const [profile, setProfile] = useState<{
    // googleId: string;
    imageUrl: string;
    email: string;
    name: string;
    givenName: string;
    familyName: string;
  } | null>(null);
  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId: googleClientId,
  //       scope: 'email'
  //     });
  //   }

  //   gapi.load('client:auth2', start);
  // }, []);
  // const onGoogleLogout = () => {
  //   googleLogout();
  //   setProfile(null);
  // };
  // const onGoogleLoginSuccess = (res: CredentialResponse) => {
  //   console.log(res);
  //   const userinfo: {
  //     [key: string]: string;
  //   } = jwt(res.credential ?? '');
  //   console.log(userinfo);
  //   setProfile({
  //     email: userinfo.email,
  //     name: userinfo.name,
  //     givenName: userinfo.given_name,
  //     familyName: userinfo.family_name,
  //     imageUrl: userinfo.picture
  //   });
  // };
  const onGoogleLoginFailure = (res: any) => {
    console.log(res);
  };
  const [conn, setConn] = useState<WebSocket | undefined>();
  const [msg, setMsg] = useState<string>();
  const [log, setLog] = useState<Massage[]>([]);
  const [roomName, setRoomName] = useState<string>('');
  const [roomId, setRoomId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [isConnect, setIsConnect] = useState<boolean>(false);
  const lobby = useAppSelector(webSocketSelectors.webSocketLobbySelector);

  const dispatch = useAppDispatch();

  const onGetLobby = () => {
    dispatch(webSocketDispatch.getLobbyDispatch());
  };

  const onChangeMsg = (text: string) => {
    setMsg(text);
  };
  const onChangeName = (name: string) => {
    setName(name);
  };
  const onChangeroomName = (roomName: string) => {
    setRoomName(roomName);
  };
  const onChangeRoomId = (roomName: string) => {
    setRoomId(roomName);
  };
  const _handleChangeLog = (item: Massage[]) => {
    console.log(item);
    console.log('log', log);
    setLog(item);
  };

  // const onSubmit = function (text: string) {
  //   if (!conn) {
  //     return;
  //   }
  //   if (!msg) {
  //     return;
  //   }
  //   conn.send(
  //     JSON.stringify({
  //       msg: `${msg}`,
  //       from: `${name}`,
  //       time: `${dayjs()}`
  //     })
  //   );
  //   setMsg('');
  // };
  // const onCloseConnection = () => {
  //   conn?.send(
  //     JSON.stringify({
  //       msg: `User: ${name} has left.`,
  //       from: `system`,
  //       time: `${dayjs()}`
  //     })
  //   );

  //   conn?.close();
  // };
  // Connection to Websocker Server...
  // ?roomName for register each room into websocket server
  // const onConnect = (room_name?: string, room_id?: string) => {
  //   if (name) {
  //     setConn(
  //       new WebSocket(
  //         `${process.env.WS_URL}/ws?roomName=${room_id ?? uuid()}&roomName=${
  //           room_name ?? roomName
  //         }&numberPlayer=${8}`
  //       )
  //     );
  //     setIsConnect(true);
  //   }
  // };
  // if (conn) {
  //   conn.onclose = function (evt) {
  //     setIsConnect(false);
  //     _handleChangeLog([
  //       {
  //         msg: `Connection closed.`,
  //         from: `system`,
  //         time: `${dayjs()}`
  //       }
  //     ]);
  //   };
  //   conn.onopen = function () {
  //     conn.send(
  //       JSON.stringify({
  //         msg: `User: ${name} has joined.`,
  //         from: `system`,
  //         time: `${dayjs()}`
  //       })
  //     );
  //     console.log('object');
  //   };
  //   conn.onmessage = function (evt) {
  //     let messages = evt.data.split('\n');
  //     let json: Massage = JSON.parse(messages);
  //     console.log(json);
  //     if (
  //       log.length > 0 &&
  //       !(
  //         dayjs(log[log.length - 1].time).diff(dayjs(json.time), 'minute') <
  //           5 &&
  //         dayjs(log[log.length - 1].time).diff(dayjs(json.time), 'minute') > -5
  //       )
  //     ) {
  //       _handleChangeLog([
  //         ...log,
  //         {
  //           msg: `${dayjs(json.time).format('HH:mm')}`,
  //           from: `system`,
  //           time: `${dayjs(json.time)}`
  //         },
  //         json
  //       ]);
  //     } else {
  //       _handleChangeLog([...log, json]);
  //     }
  //   };
  //   conn.onerror = function (err) {
  //     console.log('Socket Error: ', err);
  //   };
  // }

  return render({
    traderId,
    msg,
    log,
    name,
    isConnect,
    lobby,
    roomName,
    roomId,
    googleClientId,
    profile,
    // onGoogleLoginSuccess,
    // onGoogleLoginFailure,
    // onGoogleLogout,
    // onSubmit,
    // onConnect,
    // onCloseConnection,
    onChangeMsg,
    onChangeName,
    onChangeroomName,
    onGetLobby,
    onChangeRoomId
  });
};
export default WebsocketContainer;
