import { Component, EnvironmentInjector } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router'; 
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { appReducer } from './store/app.state';
import { StoreModule } from '@ngrx/store';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { AddpostsComponent } from './posts/addposts/addposts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StoreDevtoolsModule, PostsListComponent, RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrxcrud';
}


// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { PostsListComponent } from './posts/posts-list/posts-list.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     PostsListComponent,
//   ],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   title = 'ngrxcrud';
// }

