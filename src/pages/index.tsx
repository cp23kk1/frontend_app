import Image from 'next/image';
import styles from '@/styles/page.module.css';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

export default function Home() {
  const router = useRouter();
  return (
    <Landing
      onClick={() => {
        router.push('/gameplay');
      }}
    >
      <h1>Vocaverse</h1>
      <p>Click anywhere to play!</p>
    </Landing>
  );
}
const Landing = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  z-index: 100;
  font-size: 72px;
  background: rgb(82, 82, 82, 0.4);
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
