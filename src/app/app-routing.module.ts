import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ArchitectComponent } from './pages/architect/architect.component';
import { InitiativesComponent } from './pages/initiatives/initiatives.component';
import { InteriorComponent } from './pages/interior/interior.component';
import { ProjectComponent } from './pages/project/project.component';
import { StudyComponent } from './pages/study/study.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'architect',
    component: ArchitectComponent,
  },
  {
    path: 'initiative',
    component: InitiativesComponent,
  },
  {
    path: 'interior',
    component: InteriorComponent,
  },
  {
    path: 'project',
    component: ProjectComponent,
  },
  {
    path: 'study',
    component: StudyComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
