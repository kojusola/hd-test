'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';
import { IMainArticle } from '../../types';

type MainArticleProps = {
  mainArticle: IMainArticle | null;
};

export default function MainArticle({ mainArticle }: MainArticleProps) {
  return (
    <div className={styles.container}>
      <div className={styles.mainImageDesktop}>
        <Image
          alt="Main Article"
          src={mainArticle?.imageUrl || ''}
          layout="fill"
        />
      </div>
      <div className={styles.mainImageMobile}>
        <Image
          alt="Main Article"
          src="/images/image-web-3-mobile.jpg"
          layout="fill"
        />
      </div>
      <div className={styles.textSection}>
        <div className={styles.textTitle}>
          <h1>{mainArticle?.title}</h1>
        </div>
        <div className={styles.textDescription}>
          <p className={styles.description}>{mainArticle?.description}</p>
          <Link href={mainArticle?.ctaButton?.url || ''}>
            <button className={styles.ctaButton}>
              <span>{mainArticle?.ctaButton?.name}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
