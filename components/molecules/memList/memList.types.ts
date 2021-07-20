import { MemProps } from "../../atoms/mem/mem.types";

export interface MemDataTypes {
    image: {
      alt: string;
      url: string;
    };
    title: string;
  }
  
export interface MemsDataType {
    allMems: MemDataTypes[];
  }

export  interface renderItemProps {
  item: MemProps
}

export interface MemListProps{
  hot: boolean,
  regular: boolean
}
  