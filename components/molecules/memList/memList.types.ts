export interface ArticleDataTypes {
    title: string;
    content: string;
    image: {
      alt: string;
      url: string;
    };
  }
  
export interface ArticlesDataType {
    allArticles: ArticleDataTypes[];
  }