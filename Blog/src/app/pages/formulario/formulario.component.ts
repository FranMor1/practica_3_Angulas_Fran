import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  postService = inject(PostService)
  router = inject(Router)

  formulario: FormGroup = new FormGroup({

    titulo: new FormControl(),
    texto: new FormControl(),
    autor: new FormControl(),
    imagen: new FormControl(),
    categoria: new FormControl()
  })

  creaPost() {

    const postCreado = {
      ...this.formulario.value,
      id: '', fecha: new Date()
    }
    this.postService.createPost(postCreado)
    this.router.navigateByUrl('post')


  }

}


