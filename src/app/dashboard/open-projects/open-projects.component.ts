import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/shared/models/project';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-open-projects',
  templateUrl: './open-projects.component.html',
  styleUrls: ['./open-projects.component.scss']
})
export class OpenProjectsComponent implements OnInit {
  dataSet: IProject[] = [];
  bids: number[] = [];
  constructor(private dashService: DashboardService) { }

  ngOnInit() {
    this.getProjectByStatusnOwnerId();
  }
  getProjectByStatusnOwnerId() {
    this.dashService.GetProjectByStatus(1, 'open')
      .subscribe(res => {
        this.dataSet = res;
        for (let i = 0; i < this.dataSet.length; i++) {
            this.bids.push(this.dataSet[i].Bids.length);
        }
        console.log('open projects', this.dataSet);
      },
        error => {
          console.log('error', error);
        });
  }
}
