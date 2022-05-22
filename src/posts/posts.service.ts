import { IPost } from './interfaces/post.interface';

export class Posts {
    posts: IPost[] = [];

    constructor(post: IPost) {}

    getPosts(userId: string): IPost[] {
        return [];
    }

    createPost(userId: string, title: string, description: string, imageUrl: string): IPost | null {
        return null;
    }

    updatePost(userId: string, title: string, description: string, imageUrl: string): IPost | null {
        return null;
    }

    deletePost(userId: string, id: string) {}
}