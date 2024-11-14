'use client';
import Link from 'next/link';
import styles from './index.module.scss';
import { HeroInterface } from '../common/interfaces';
import MainArticle from '../mainArticle';
import SideBar from '../sidebar';

export default function Hero({ mainArticle, sidebar }: HeroInterface) {
  return (
    <div className={styles.container}>
      <aside className={styles.mainArticle}>
        {mainArticle && <MainArticle mainArticle={mainArticle} />}
      </aside>
      <aside className={styles.sidebar}>
        {sidebar && <SideBar sidebar={sidebar} />}{' '}
      </aside>
    </div>
  );
}
