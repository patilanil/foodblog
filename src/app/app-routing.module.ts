import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BloglistComponent } from './components/bloglist/bloglist.component';
import { BlogviewComponent } from './components/blogview/blogview.component';


const routes: Routes = [
  { path: '', redirectTo: 'blog', pathMatch: "full" },
  {
    path: 'blog',
    children: [
      { path: '', component: BloglistComponent },
      { path: 'add', component: BloglistComponent },
      { path: 'view/:id', component: BlogviewComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
