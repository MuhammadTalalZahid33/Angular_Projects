import { TestComponentRenderer } from '@angular/core/testing';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home/home.component').then(m => m.HomeComponent);
        }
    },
    {
        path: 'todos',
        loadComponent: () => {
            return import('./todos/todos.component').then(m => m.TodosComponent);
        }
    },
    {
        path: 'about',
        loadComponent: () => {
            return import('./about/about.component').then(m => m.AboutComponent);

        }
    },
    {
        path: 'tdf',
        loadComponent: () => {
            return import('./components/template-driven-form/template-driven-form.component')
            .then(m => m.TemplateDrivenFormComponent);
        }
    },
    {
        path: 'rf',
        loadComponent: () => {
            return import('./components/reactive-form/reactive-form.component')
            .then(m => m.ReactiveFormComponent);
        }
    },
    {
        path: 'test',
        loadComponent: () => {
            return import('./components/tester-component/tester-component.component')
            .then(m => m.TesterComponentComponent);
        }
    },
    {
        path: 'anime',
        loadComponent: () => {
            return import('./components/animexample/animexample.component')
            .then(m => m.AnimexampleComponent);
        }
    }


]
