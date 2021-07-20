export const ButtonNames = [
   'Home','Regular', 'Hot'
]

// Functions filtering redux store  for hot and regular Mems based on quantity of upvotes and downvotes

export const hotMems = (votes:any) => Object.fromEntries(Object.entries(votes).filter((item:any) => votes[item[0]].upvote-votes[item[0]].downvote>=5))

export const regularMems = (votes:any) => Object.fromEntries(Object.entries(votes).filter((item:any) => votes[item[0]].upvote-votes[item[0]].downvote<5))

// Function returns data for hot or regular routes or all

export const whichListDisplay = (votes: any, hot: boolean, regular: boolean) => {
    if (hot) {
      return hotMems(votes);
    }
    if (regular) {
      return regularMems(votes);
    }
    return votes;
  };

// Function return only CMS data which points of redux store filtered Mems
  export  const filteredCmsData = (data:any, votes:any, hot:boolean, regular:boolean) =>
  data &&
  data.allMems.filter((item:any) =>
    whichListDisplay(votes, hot, regular).hasOwnProperty(item.title)
  );

export type hotMemsType = typeof hotMems

export type regularMemsType = typeof regularMems