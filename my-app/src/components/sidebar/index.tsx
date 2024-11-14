'use client';
import Link from 'next/link';
import styles from './index.module.scss';
import { ISidebar, ISidebarArticle } from '../../types';

type SidebarProps = {
  sidebar: ISidebar | null;
};

export default function SideBar({ sidebar }: SidebarProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{sidebar?.title}</h2>
      <div className={styles.containerSidebar}>
        {sidebar &&
          sidebar?.articles?.map(({ title, description, url }, index) => {
            return (
              <div
                style={{
                  borderBottomWidth: `${index + 1 == sidebar?.articles.length ? '0' : '0.3px'}`,
                }}
                className={styles.sidebar}
                key={title}>
                <Link href={url} className={styles.sidebarLink}>
                  {title}
                </Link>
                <p className={styles.sidebarText}>{description}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
