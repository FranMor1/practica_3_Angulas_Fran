import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/IPost.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: IPost[] = [
    {
      id: 1,
      titulo: "Introducción a TypeScript",
      texto: "Aprende las bases de TypeScript, el lenguaje que mejora JavaScript con tipos.",
      autor: "Juan Pérez",
      imagen: "https://blog.teamtreehouse.com/wp-content/uploads/2015/05/87a5a0fdc86455c3f94b0b0eebfdb1b9_400x400.png",
      fecha: new Date("2024-11-01"),
      categoria: "Programación",
    },
    {
      id: 2,
      titulo: "10 Trucos para Mejorar tu Código",
      texto: "Con la ayuda de Mario, descubrimos 10 truquis maravillosos",
      autor: "María López",
      imagen: "https://www.indiewire.com/wp-content/uploads/2017/10/matrix-code.jpg",
      fecha: new Date("2024-10-28"),
      categoria: "Desarrollo Web",
    },
    {
      id: 3,
      titulo: "Cómo Empezar en Angular",
      texto: "Guía rápida para iniciar un proyecto Angular desde cero.",
      autor: "Carlos García",
      imagen: "https://ipaginaweb.com/wp-content/uploads/angular-1-840x440.jpg",
      fecha: new Date("2024-10-15"),
      categoria: "Frontend",
    },
    {
      id: 4,
      titulo: "Las Mejores Herramientas para Desarrolladores",
      texto: "Explora herramientas que todo desarrollador debe conocer.",
      autor: "Laura Fernández",
      imagen: "https://blog.desafiolatam.com/wp-content/uploads/2023/06/Top-7-preguntas-para-desarrollador-full-stack-1024x512.jpg",
      fecha: new Date("2024-09-30"),
      categoria: "Tecnología",
    },
    {
      id: 5,
      titulo: "Beneficios de Usar Interfaces en TypeScript",
      texto: "Descubre cómo las interfaces hacen tu código más robusto.",
      autor: "David Martín",
      imagen: "https://i.ytimg.com/vi/bcPW5gNzyMo/maxresdefault.jpg",
      fecha: new Date("2024-09-20"),
      categoria: "Programación",
    },
    {
      id: 6,
      titulo: "Cómo Elegir la Mejor Librería de UI",
      texto: "Comparativa de las librerías más populares para construir interfaces de usuario.",
      autor: "Ana Gómez",
      imagen: "https://www.dreamhost.com/blog/wp-content/uploads/2024/08/01_BLOG-HERO-1460x1095-Top-React-UI-Libraries.jpg",
      fecha: new Date("2024-08-15"),
      categoria: "Frontend",
    },
  ];

  getAll(): IPost[] {
    return this.posts;
  }

  createPost(post: IPost) {
    this.posts.push(post);
  }

  getByCategory(categoria: string): IPost[] {
    return this.posts.filter(post => post.categoria === categoria);
  }

}
