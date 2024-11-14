'use client';
// import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';
import { SidebarInterface, SidebarArticle } from '../common/interfaces';

type SidebarType = {
  sidebar: SidebarInterface | null;
};

export default function SideBar({ sidebar }: SidebarType) {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{sidebar?.title}</h2>
      <div className={styles.containerSidebar}>
        {sidebar &&
          sidebar?.articles?.map(
            ({ title, description, url }: SidebarArticle, index: number) => {
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
            },
          )}
      </div>
    </div>
  );
}
