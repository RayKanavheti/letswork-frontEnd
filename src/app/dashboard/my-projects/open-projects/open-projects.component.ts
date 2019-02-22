import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/shared/models/project';
import { CoreService } from 'src/app/core/core.service';
import { ISkill } from 'src/app/shared/models/skill';
import { UploadFile, NzMessageService } from 'ng-zorro-antd';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-open-projects',
  templateUrl: './open-projects.component.html',
  styleUrls: ['./open-projects.component.scss'],
  providers: [CoreService]
})
export class OpenProjectsComponent implements OnInit {
  dataSet: IProject[] = [];
  bids: number[] = [];
  isVisible = false;
  isVisible2 = false;
  isConfirmLoading = false;
  listOfSelectedValue: ISkill[] = [];
  listOfSelectedValueLabel = [];
  listOfSkills: ISkill[] = [];
  selected1 = false;
  selected2 = false;
  width = 750;
  editIndex: number = undefined;
  gridStyle = {
    width: '100%',
    textAlign: 'center'
  };
  fileList: UploadFile[] = [];
  uploading = false;
  formatterDollar = value => `$ ${value}`;
  parserDollar = value => value.replace('$ ', '');
  constructor(private dashService: DashboardService, private coreService: CoreService, private msg: NzMessageService) { }

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
  showEditModal(i: number): void {
    this.editIndex = i;
    this.listOfSelectedValueLabel = [];
    for (let k = 0; k < this.dataSet[i].Jobs.length; k++) {
      this.listOfSelectedValueLabel.push(this.dataSet[i].Jobs[k].Title);
    }
    this.getAllSkills();
    this.isVisible = true;
    if (this.dataSet[i].ProjectType === 'fixed') {
      if (this.selected1 === false) {
        this.selected1 = true;
        if (this.selected1 === true) {
          this.selected2 = false;
        }
        return;
      }
      if (this.selected1 === true) {
        this.selected1 = false;
        return;
      }
    }
    if (this.dataSet[i].ProjectType === 'hourly') {
      if (this.selected2 === false) {
        this.selected2 = true;
        if (this.selected1 === true) {
          this.selected1 = false;
        }
        return;
      }
      if (this.selected2 === true) {
        this.selected2 = false;
        return;
      }
    }
  }
  updateDocsModal(i: number): void {
    this.editIndex = i;
    this.isVisible2 = true;
  }
  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  handleOk2(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible2 = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  handleCancel2(): void {
    this.isVisible2 = false;
  }

  getAllSkills(): void {
    this.coreService.getAllSkills()
      .subscribe(skills => {
        this.listOfSkills = skills;
        console.log(this.listOfSkills);
      });
  }
  SelectedMethod(index: number) {
    if (index === 1) {
      if (this.selected1 === false) {
        this.selected1 = true;
        if (this.selected1 === true) {
          this.selected2 = false;
        }
        return;
      }
      if (this.selected1 === true) {
        this.selected1 = false;
        return;
      }
    }
    if (index === 2) {
      if (this.selected2 === false) {
        this.selected2 = true;
        if (this.selected1 === true) {
          this.selected1 = false;
        }
        return;
      }
      if (this.selected2 === true) {
        this.selected2 = false;
        return;
      }
    }
  }
  submitEditedProject() {
    this.listOfSelectedValue = [];
    for (let i = 0; i < this.listOfSelectedValueLabel.length; i++) {
      for (let k = 0; k < this.listOfSkills.length; k++) {
        if (this.listOfSelectedValueLabel[i] === this.listOfSkills[k].Title) {
          this.listOfSelectedValue.push(this.listOfSkills[k]);
        }
      }
    }
    this.dataSet[this.editIndex].Jobs = this.listOfSelectedValue;
    this.dataSet[this.editIndex].ProjectType = this.selected2 === true ? 'hourly' : 'fixed';
    console.log('full selected...', this.dataSet[this.editIndex]);
  }
  beforeUpload = (file: UploadFile): boolean => {
    this.fileList.push(file);
    return false;
  }
  uploadFiles() {
    const formData = new FormData();
    // tslint:disable-next-line:no-any
    this.fileList.forEach((file: any) => {
      formData.append('files', file);
    });
    this.uploading = true;
    this.coreService.UploadProjectFiles(formData, this.dataSet[this.editIndex].ID)
      .subscribe(data => {
        console.log('my response', data);
        this.msg.create('success', 'File uploaded successfully');
        this.uploading = false;
      }, error => {
        this.msg.create('error', 'File upload failed');
        this.uploading = false;
        console.log(error);
      }
      );
  }

}
