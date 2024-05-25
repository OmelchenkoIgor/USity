import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component')
    },
    {
        path: 'barber-shops',
        loadComponent: () => import('./pages/categories/categories.component')
    },
    {
        path: 'coffee-shops',
        loadComponent: () => import('./pages/categories/categories.component')
    },
    {
        path: 'restaurants',
        loadComponent: () => import('./pages/categories/categories.component')
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
