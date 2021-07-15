export interface MemDataTypes {
    id: string;
    image: {
      alt: string;
      url: string;
    };
    title: string;
  }
  
export interface MemsDataType {
    allMems: MemDataTypes[]
  }

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
  