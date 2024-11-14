'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './header.module.scss';
import LogoSvg from '@/components/assets/logo.svg';
import MenuSvg from '@/components/assets/icon-menu.svg';
import { NavItemInterface } from '../common/interfaces';
import ModalCloseButton from '@/components/assets/icon-menu-close.svg';

type NavItemsType = {
  navItems: NavItemInterface[];
};

export default function Header({ navItems }: NavItemsType) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleCloseClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsOpen(false);
  };
  return (
    <header className={styles.container}>
      <LogoSvg className={styles.logo} />

      <button
        className={`${styles.btnToggleSidebar}`}
        onClick={handleToggleClick}>
        <MenuSvg className={styles.menu} />
      </button>
      <div className={`${styles.overlay} ${isOpen ? styles.opened : ''}`} />
      <div className={`${styles.sidebar} ${isOpen ? styles.opened : ''}`}>
        <div className={`${styles.header}`}>
          <button
            className={`${styles.btnCloseSidebar}`}
            onClick={handleCloseClick}>
            <ModalCloseButton />
          </button>
        </div>
        <div className={`${styles.drawerBody} ${styles.row}`}>
          {navItems?.map(({ name, url }: NavItemInterface) => {
            return (
              <Link href={url} key={name} className={styles.drawerLink}>
                {name}
              </Link>
            );
          })}
        </div>
      </div>
      <nav className={styles.menuList}>
        {navItems?.map(({ name, url }: NavItemInterface) => {
          return (
            <Link href={url} key={name} className={styles.link}>
              {name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
