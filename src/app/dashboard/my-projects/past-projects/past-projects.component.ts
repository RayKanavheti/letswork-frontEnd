import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/shared/models/project';
import { DashboardService } from '../../dashboard.service';


@Component({
  selector: 'app-past-projects',
  templateUrl: './past-projects.component.html',
  styleUrls: ['./past-projects.component.scss']
})
export class PastProjectsComponent implements OnInit {
  dataSet: IProject[] = [];

  constructor(private dashService: DashboardService) { }

  ngOnInit() {
    this.getProjectByStatusnOwnerId();
  }
  getProjectByStatusnOwnerId() {
    this.dashService.GetProjectByStatus(1, 'completed')
      .subscribe(res => {
        this.dataSet = res;
        console.log('completed projects', this.dataSet);
      },
        error => {
          console.log('error', error);
        });
  }
}
