export interface INavItem {
  name: string;
  url: string;
}

export interface ICTAButton {
  name: string;
  url: string;
}

export interface IMainArticle {
  title: string;
  description: string;
  imageUrl: string;
  ctaButton: ICTAButton;
}

export interface ISidebarArticle {
  title: string;
  description: string;
  url: string;
}

export interface ISidebar {
  title: string;
  articles: ISidebarArticle[];
}

export interface IArticle {
  title: string;
  description: string;
  imageUrl: string;
}
