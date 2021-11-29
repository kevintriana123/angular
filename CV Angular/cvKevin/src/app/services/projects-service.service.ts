import { Injectable } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsServiceService {

  arrProyectos :Project []

  constructor() { 

    this.arrProyectos =  [
      {
        nombre: 'preubas',
        descipcion: 'ing',
        iamgenes: [],
        url: 'ring',
        ano: 2019,
        cliente:'strg',
        urlClient: 'strng',
        categoria: 'sting',
        tecnologias: 'strng',

      }
  ];
  
}
getProjects(){
  return this.arrProyectos;
}
}
