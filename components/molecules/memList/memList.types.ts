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

  