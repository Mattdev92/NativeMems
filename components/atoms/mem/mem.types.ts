import { MemDataTypes } from "../../molecules/memList/memList.types";

export interface MemProps {
    item:{
       image: {
        alt: string;
        url: string;
      };
      title: string; 
    }
}

export interface MemVote {
    upvote: number,
    downvote: number
}
