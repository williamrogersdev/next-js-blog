/* 

*/


//get the first 20 posts



export const ALL_POSTS = `query NewQuery {
    posts(first: 20, where: {orderby: {field: DATE, order: DESC}}) {
      nodes {
        id
        date
        slug
        title
        excerpt
      }
    }
  }

`


/// get alll the slugs for statis paths and generation 



//get post by slug so we can display to user 