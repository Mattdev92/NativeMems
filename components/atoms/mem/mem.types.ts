import { MemDataTypes } from "../../molecules/memList/memList.types";

export interface MemProps {
    item: MemDataTypes
}

export interface MemVote {
    upvote: number,
    downvote: number
}
