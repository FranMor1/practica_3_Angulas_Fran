import { Component, inject } from '@angular/core';
import { IPost } from '../../interfaces/IPost.interface';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-lista-post',
  standalone: true,
  imports: [],
  templateUrl: './lista-post.component.html',
  styleUrl: './lista-post.component.css'
})
export class ListaPostComponent {
  posts: IPost[] = [];
  postService = inject(PostService)

  ngOnInit() {
    this.posts = this.postService.getAll();
  }


}
