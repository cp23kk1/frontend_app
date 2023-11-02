import Image from 'next/image';
import styles from '@/styles/page.module.css';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      }}
    >
      <h1>Vocaverse</h1>
    </div>
  );
}
