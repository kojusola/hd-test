'use client';
import styles from './page.module.scss';
import React, { useEffect, useState } from 'react';
import { httpClient } from '@/lib/axiosInstance';
import { DataInterface } from '@/components/common/interfaces';

import Header from '@/components/header';
import Hero from '@/components/hero';
import Articles from '@/components/articles';

export default function Home() {
  const [data, setData] = useState<DataInterface | null>(null);

  useEffect(() => {
    httpClient
      .get('/data')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div className={styles.container}>
      <Header navItems={data?.navItems || []} />
      <Hero
        mainArticle={(data && data?.mainArticle) || null}
        sidebar={(data && data?.sidebar && data.sidebar) || null}
      />
      <Articles articles={data?.articles || []} />
    </div>
  );
}
