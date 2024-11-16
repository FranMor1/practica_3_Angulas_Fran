import { Routes } from '@angular/router';
import { ListaPostComponent } from './pages/lista-post/lista-post.component';
import { FormularioComponent } from './pages/formulario/formulario.component';


export const routes: Routes = [

    { path: '', pathMatch: 'full', redirectTo: '/post' }, //si no existe, me redirige a redirectTo, en este caso Post
    { path: 'post', component: ListaPostComponent },
    { path: 'new', component: FormularioComponent },
    { path: '**', redirectTo: '/inicio' }
];
