export interface ApiUser {
  _id: string;
  username: string;
}

export interface ApiPost {
  _id: string;
  title: string;
  content: string;
  publishDate: string;
  author: ApiUser;
  comments: ApiComment[];
}

export interface ApiComment {
  _id: string;
  content: string;
  author: ApiUser;
  createdAt: string;
}
