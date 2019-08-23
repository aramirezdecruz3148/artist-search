import React from 'react';
import styles from './Nav.css';

export default function Nav() {
  return (
    <div className={styles.nav}>
      <a href='/'><button>Search Artists</button></a>
    </div>
  );
}
