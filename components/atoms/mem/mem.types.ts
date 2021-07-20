export interface MemProps {
       image: {
        alt: string;
        url: string;
      };
      title: string; 
}

export interface MemVote {
    upvote: number,
    downvote: number
}

export interface AllMemProps{
    item: MemProps,
    upvote: number,
    downvote: number
}
