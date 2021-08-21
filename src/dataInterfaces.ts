export interface Author {
  _id: string;
  username: string;
}

export interface Post {
  title: string;
  content: string;
  publishDate: string;
  author: Author;
}
