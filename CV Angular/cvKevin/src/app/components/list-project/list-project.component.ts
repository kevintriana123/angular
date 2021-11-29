import { Component, OnInit } from '@angular/core';
import { Project} from '../../models/project';
import { ProjectsServiceService } from '../../services/projects-service.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss']
})
export class ListProjectComponent implements OnInit {


  arrProyectos : Project [];


  constructor(private ProjectServices : ProjectsServiceService) {

    this.arrProyectos = this.ProjectServices.getProjects();
  }

  ngOnInit(): void {
    console.log(this.arrProyectos)
  }

}
