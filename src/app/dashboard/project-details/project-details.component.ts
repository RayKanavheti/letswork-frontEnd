import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IProject } from 'src/app/shared/models/project';
import { TempStoreService } from 'src/app/shared/services/tempStoreService';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectDetailsComponent implements OnInit {
  projectDetail: IProject;
  data: any[] = [];
  constructor(private tempService: TempStoreService) {

  }

  ngOnInit() {
    this.loadData(1);
    this.tempService.getData().subscribe(
      (projectData: IProject) => {
        this.projectDetail = projectData;
        console.log('selected project', this.projectDetail);
      }
    );
  }
  loadData(pi: number): void {
    this.data = new Array(5).fill({}).map((_, index) => {
      return {
        href: 'http://ant.design',
        title: `ant design part ${index} (page: ${pi})`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          // tslint:disable-next-line:max-line-length
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
      };
    });
  }
}
