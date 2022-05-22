import { IPost } from './interfaces/post.interface';

export class Post {
    readonly id: string;
    readonly userId: string;
    title: string;
    description: string;
    imageUrl: string;
    date: Date;

    constructor(post: IPost) {
        const { id, userId, title, description, imageUrl } = post;
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.date = new Date();
    }
}