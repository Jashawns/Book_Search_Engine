import gql from "graphql-tag";
// query for me data for user model
export const GET_ME  = gql`
    {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                title
                description
                image
                link
            }
        }
    }
`;