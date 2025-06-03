import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ɵChangeDetectionScheduler } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { log } from 'console';
import { title } from 'process';
import { Post } from '../../models/posts.model';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { addPost } from '../state/posts.action';

@Component({
  selector: 'app-addposts',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './addposts.component.html',
  styleUrl: './addposts.component.css'
})
export class AddpostsComponent implements OnInit {
  postForm!: FormGroup;

  constructor(private store:Store<AppState>) {}

@Input() data:any

  onAddPost() {
    if (!this.postForm.valid) {
      return
    }
    const post: Post = {
      title: this.postForm.value.title,
      Description: this.postForm.value.Description,
      id: ''
    }
    this.store.dispatch(addPost({post}))
  }
  showDescriptionError() {
    const descriptionForm = this.postForm.get('Description')
    if (descriptionForm?.touched && !descriptionForm?.valid) {
      if (descriptionForm.errors?.['required']) {
        return 'Description is required'
      }
      if (descriptionForm.errors?.['minlength']) {
        return 'Description should be of minimum 10 charcter length'
      }
    }
    return
  }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      Description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10)
      ])
    })
  }

}
