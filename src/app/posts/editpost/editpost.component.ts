import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { getPostById } from '../state/posts.selector';
import { Post } from '../../models/posts.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscribable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { updatePost } from '../state/posts.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editpost',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './editpost.component.html',
  styleUrl: './editpost.component.css'
})
export class EditpostComponent {
  postForm!: FormGroup;
  post: Post | undefined;
  postSubscription: Subscription | undefined
  constructor(private route: ActivatedRoute, private store: Store<AppState>,private router:Router) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id')
      this.postSubscription = this.store.select(getPostById, { id }).subscribe((data) => {
        this.post = data
        // console.log(this.post);
        this.createForm()
      })
    })
  }
  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(this.post?.title, [
        Validators.required,
        Validators.minLength(6)
      ]),
      Description: new FormControl(this.post?.Description, [
        Validators.required,
        Validators.minLength(10)
      ])
    })
  }
  onSubmit() {
    if (!this.postForm.valid) {
      return
    }
    const title = this.postForm.value.title;
    const Description = this.postForm.value.Description

    const post: Post = {
      id: this.post!.id,
      title,
      Description,
    }
    this.store.dispatch(updatePost({ post }))
    this.router.navigate(['posts/add'])
  }

  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe()
    }
  }
}


