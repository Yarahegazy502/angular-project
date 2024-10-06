import { Component } from '@angular/core';
import { IPost } from '../interfaces/posts';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  posts: IPost[] = [];

  constructor(
    private __postsService: PostsService
  ) {
  }

  ngOnInit(): void {
    this.posts = this.__postsService.getPosts();
    // let postsServices = new PostsService();
    // this.posts = postsServices.getPosts();

    this.__postsService.handelDetails.subscribe((post: IPost) => {
      console.log(post);
    })
  }

  // getPostDetails(item: IPost): void {
  //   console.log(item);
  // }
}
