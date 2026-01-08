import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about').then((m) => m.About),
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./features/experience/experience').then((m) => m.Experience),
  },
  {
    path: 'education',
    loadComponent: () =>
      import('./features/education/education').then((m) => m.Education),
  },
  {
    path: 'skills',
    loadComponent: () =>
      import('./features/skill/skill').then((m) => m.Skill),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/project/project').then((m) => m.Project),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact').then((m) => m.Contact),
  },
  {
    path: '**',
    redirectTo: '',
  }

];
