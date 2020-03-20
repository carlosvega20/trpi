/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getThread = `query GetThread($id: ID!) {
  getThread(id: $id) {
    id
    owner
    updatedAt
    content
    event
    mood
    comments {
      items {
        id
        owner
        content
        updatedAt
      }
      nextToken
    }
  }
}
`;
export const listThreads = `query ListThreads(
  $filter: ModelThreadFilterInput
  $limit: Int
  $nextToken: String
) {
  listThreads(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      updatedAt
      content
      event
      mood
      comments {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    owner
    content
    updatedAt
  }
}
`;
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      content
      updatedAt
    }
    nextToken
  }
}
`;
