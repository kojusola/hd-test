export interface NavItemInterface {
  name: string;
  url: string;
}

export interface CTAButton {
  name: string;
  url: string;
}

export interface MainArticleInterface {
  title: string;
  description: string;
  imageUrl: string;
  ctaButton: CTAButton;
}

export interface SidebarArticle {
  title: string;
  description: string;
  url: string;
}

export interface SidebarInterface {
  title: string;
  articles: SidebarArticle[];
}

export interface ArticleInterface {
  title: string;
  description: string;
  imageUrl: string;
}

export interface HeroInterface {
  mainArticle: MainArticleInterface;
  sidebar: SidebarInterface;
}

export interface DataInterface {
  navItems: NavItemInterface[];
  mainArticle: MainArticleInterface;
  sidebar: SidebarInterface;
  articles: ArticleInterface[];
}
