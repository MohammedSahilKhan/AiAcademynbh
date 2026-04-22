import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { CoursesComponent } from './pages/courses';
import { GalleryComponent } from './pages/gallery';
import { AboutComponent } from './pages/about';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'about', component: AboutComponent },
];
