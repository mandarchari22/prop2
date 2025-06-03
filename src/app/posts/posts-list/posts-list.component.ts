import { Component,Input,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs';
import { Post } from '../../models/posts.model';
// import { getPosts } from '../state/posts.selector';
import { CommonModule } from '@angular/common';
import { AppState } from '../../store/app.state';
import { getPosts } from '../state/posts.selector';
import { RouterLink ,RouterLinkActive, RouterOutlet} from '@angular/router';
import { deletePost } from '../state/posts.action';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {



  posts!: Observable<Post[]>;

  constructor(private store:Store<AppState>) { }
  ngOnInit(): void {
    this.posts = this.store.select(getPosts)
  }
  onDeletePost(id:string){
    if (confirm('are you sure want to delete')) {
      console.log('delete the post');
      this.store.dispatch(deletePost({id}))
    }
  }
} 
