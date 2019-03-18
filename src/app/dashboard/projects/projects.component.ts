import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { IProject } from 'src/app/shared/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  data: any[] = [];
  dataSet: IProject[] = [];
  constructor(private dashService: DashboardService) { }

  ngOnInit() {
   this.getProjectByStatusonly();
  }
  getProjectByStatusonly() {
    this.dashService.GetProjectByStatusOnly('open')
      .subscribe(res => {
        this.dataSet = res;
        console.log('Open projects', this.dataSet);
      },
        error => {
          console.log('error', error);
        });
  }

}
