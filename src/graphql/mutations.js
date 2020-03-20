/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createThread = `mutation CreateThread($input: CreateThreadInput!) {
  createThread(input: $input) {
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
export const updateThread = `mutation UpdateThread($input: UpdateThreadInput!) {
  updateThread(input: $input) {
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
export const deleteThread = `mutation DeleteThread($input: DeleteThreadInput!) {
  deleteThread(input: $input) {
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
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    id
    owner
    content
    updatedAt
  }
}
`;
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
    id
    owner
    content
    updatedAt
  }
}
`;
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
    id
    owner
    content
    updatedAt
  }
}
`;
