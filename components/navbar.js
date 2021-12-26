import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';

export const Navbar = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div onClick={() => router.push('/')}>Home ( 🏠 )</div>
      <div onClick={() => router.push('/international/1')}>International ( 🇺🇸 )</div>
      <div onClick={() => router.push('/national/1')}>National ( 🇮🇩 )</div>
      <div onClick={() => router.push('/about')}>About ( 👨🏽‍💻 )</div>
    </div>
  );
};