export interface VotesType{
  upvote: number,
  downvote: number
}
export interface InnitialStateType {
    author: string;
    votes: VotesType[]
  }
  