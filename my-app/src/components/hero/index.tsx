'use client';
import styles from './index.module.scss';
import { ISidebar, IMainArticle } from '../../types';
import MainArticle from '../mainArticle';
import SideBar from '../sidebar';
interface HeroProps {
  sidebar: ISidebar | null;
  mainArticle: IMainArticle | null;
}

export default function Hero({ mainArticle, sidebar }: HeroProps) {
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
