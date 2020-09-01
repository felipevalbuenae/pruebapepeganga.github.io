import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LadingPageComponent } from './pages/lading-page/lading-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    component: LadingPageComponent,
    data: {
      title: 'landing'
    }
  },
  {
    path: 'users',
    component: UsersPageComponent,
    data: {
      title: 'users'
    }
  },
  {
    path: 'posts',
    component: PostsPageComponent,
    data: {
      title: 'posts'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
