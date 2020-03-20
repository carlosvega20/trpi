/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateThread = `subscription OnCreateThread($owner: String!) {
  onCreateThread(owner: $owner) {
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
export const onUpdateThread = `subscription OnUpdateThread($owner: String!) {
  onUpdateThread(owner: $owner) {
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
export const onDeleteThread = `subscription OnDeleteThread($owner: String!) {
  onDeleteThread(owner: $owner) {
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
export const onCreateComment = `subscription OnCreateComment($owner: String!) {
  onCreateComment(owner: $owner) {
    id
    owner
    content
    updatedAt
  }
}
`;
export const onUpdateComment = `subscription OnUpdateComment($owner: String!) {
  onUpdateComment(owner: $owner) {
    id
    owner
    content
    updatedAt
  }
}
`;
export const onDeleteComment = `subscription OnDeleteComment($owner: String!) {
  onDeleteComment(owner: $owner) {
    id
    owner
    content
    updatedAt
  }
}
`;
