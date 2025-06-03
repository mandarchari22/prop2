import { Routes } from '@angular/router';
import path from 'path';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { AddpostsComponent } from './posts/addposts/addposts.component';
import { EditpostComponent } from './posts/editpost/editpost.component';

export const routes: Routes = [
    {
        path: 'posts-list',
        component: PostsListComponent,
    },{
            path: 'posts/add',
            component: AddpostsComponent
        },
        {
            path: 'posts/edit/:id',
            component: EditpostComponent
        },
];
