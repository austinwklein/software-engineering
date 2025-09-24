import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'test', loadComponent: () => import('./test/test.component').then(m => m.TestComponent) },
];
