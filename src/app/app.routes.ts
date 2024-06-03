import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component')
    },
    {
        path: 'categories',
        loadComponent: () => import('./pages/categories/categories.component')
    },
    {
        path: 'partnership',
        loadComponent: () => import('./pages/partnership/partnership.component')
    },
    {
        path: 'location/:id',
        loadComponent: () => import('./pages/location/location.component')
    },
    {
        path: 'reference-book',
        loadComponent: () => import('./pages/reference-book/reference-book.component')
    },
    {
        path: 'error404',
        loadComponent: () => import('./pages/error404/error404.component')
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/error404'
    }
];
