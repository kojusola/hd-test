import React from 'react';
import Hero from '@/components/hero';
import styles from './page.module.scss';
import Header from '@/components/header';
import Articles from '@/components/articles';
import { INavItem, IMainArticle, ISidebar, IArticle } from '@/types';

interface ApiResponse {
  sidebar: ISidebar;
  navItems: INavItem[];
  articles: IArticle[];
  mainArticle: IMainArticle;
}

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/data`);
  const data: ApiResponse = await response.json();

  return (
    <div className={styles.container}>
      <Header navItems={data?.navItems} />
      <Hero mainArticle={data?.mainArticle} sidebar={data?.sidebar} />
      <Articles articles={data?.articles} />
    </div>
  );
}
