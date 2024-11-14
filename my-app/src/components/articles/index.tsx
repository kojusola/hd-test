'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.scss';

import { ArticleInterface } from '../common/interfaces';

type ArticlesType = {
  articles: ArticleInterface[];
};

export default function Articles({ articles }: ArticlesType) {
  return (
    <div className={styles.container}>
      {articles &&
        articles?.map(
          (
            { title, description, imageUrl }: ArticleInterface,
            index: number,
          ) => {
            console.log('imageUrl', imageUrl);
            return (
              <div className={styles.article} key={title}>
                <div className={styles.articleImage}>
                  <Image alt="Main Article" src={imageUrl} layout="fill" />
                </div>
                <div className={styles.articleText}>
                  <h1 className={styles.articleNumber}>0{index + 1}</h1>
                  <Link href="/" className={styles.articleTitle}>
                    {title}
                  </Link>
                  <p className={styles.articleDescription}>{description}</p>
                </div>
              </div>
            );
          },
        )}
    </div>
  );
}
