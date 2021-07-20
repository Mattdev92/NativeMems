export const ButtonNames = [
    'Regular', 'Hot','Favourite'
]

export const hotMems = (votes:any) => Object.fromEntries(Object.entries(votes).filter((item:any) => votes[item[0]].upvote-votes[item[0]].downvote>=5))

export const regularMems = (votes:any) => Object.fromEntries(Object.entries(votes).filter((item:any) => votes[item[0]].upvote-votes[item[0]].downvote<5))

export const whichListDisplay = (votes: any, hot: boolean, regular: boolean) => {
    if (hot) {
      return hotMems(votes);
    }
    if (regular) {
      return regularMems(votes);
    }
    return votes;
  };
  
export type hotMemsType = typeof hotMems

export type regularMemsType = typeof regularMems