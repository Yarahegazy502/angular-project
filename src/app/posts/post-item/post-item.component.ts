import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPost } from '../../interfaces/posts';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.scss'
})
export class PostItemComponent {
  @Input({ required: true }) post!: IPost;
  // @Output() handelDetails = new EventEmitter;

  constructor(
    private __postsService: PostsService
  ) { }

  getDetails(): void {
    this.__postsService.handelDetails.emit(this.post);
    // this.handelDetails.emit(this.post);
  }
}
