import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { IProject } from 'src/app/shared/models/project';

@Component({
  selector: 'app-work-in-progress',
  templateUrl: './work-in-progress.component.html',
  styleUrls: ['./work-in-progress.component.scss']
})
export class WorkInProgressComponent implements OnInit {
  dataSet: IProject[] = [];
  constructor(private dashService: DashboardService) { }

  ngOnInit() {
    this.getProjectByStatusnOwnerId();
  }
  getProjectByStatusnOwnerId() {
    this.dashService.GetProjectByStatus(1, 'in-progress')
      .subscribe(res => {
        this.dataSet = res;
        console.log('work in progress projects', this.dataSet);
      },
        error => {
          console.log('error', error);
        });
  }
}
