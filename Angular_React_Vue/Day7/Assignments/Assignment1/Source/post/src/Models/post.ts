export class Post {
    PostName: string;
    PostDescription: string;
    PostedDate: Date;
    PostedImage: string;
    constructor(PostName: string, PostDescription: string, PostedDate:Date, PostedImage: string) {
        this.PostName =PostName;
        this.PostDescription=PostDescription;
        this.PostedDate=PostedDate;
        this.PostedImage=PostedImage;
  }
}
