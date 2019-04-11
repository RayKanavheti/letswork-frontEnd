import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { IProject } from 'src/app/shared/models/project';
import { NzModalService } from 'ng-zorro-antd';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { TempStoreService } from 'src/app/shared/services/tempStoreService';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent implements OnInit {
  dataSet: IProject[] = [];
  constructor(private dashService: DashboardService, private modalService: NzModalService, private tempService: TempStoreService) { }

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

  ViewProjectDetails(selectedProject: IProject) {
    console.log('selected c', selectedProject);
    this.tempService.setData(selectedProject);
    const modal = this.modalService.create(
      {
        nzClassName: 'myModal',
        nzTitle: '<h1>' + selectedProject.Title + '</h1>',
        nzContent: ProjectDetailsComponent,
        nzWidth: 1050,
        nzFooter: [{
          label: 'change component tilte from outside',
          onClick: (componentInstance) => {
            // componentInstance.title = 'title in inner component is changed';
          }
        }]
      }
    );
    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
  }

}
