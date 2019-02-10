import { Component, OnInit } from '@angular/core';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { CoreService } from 'src/app/core/core.service';
import { ISkill } from 'src/app/shared/models/skill';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { DashboardService } from '../dashboard.service';
import { IProject, Project } from 'src/app/shared/models/project';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
  providers: [CoreService]
})
export class AddProjectComponent implements OnInit {
  demoValue = 0;
  demoValue2 = 100;
  listOfSkills: ISkill[] = [];
  gridStyle = {
    width: '100%',
    textAlign: 'center'
  };
  selected1 = false;
  selected2 = false;
  Timelines = ['1 day', '3 days', '1 week', '2 '];
  listOfSelectedValue: ISkill[] = [];
  projectForm: FormGroup;
  uploading = false;
  fileList: UploadFile[] = [];
  btnLoading = false;
  customReq = (item: any) => {
    return Subscription.EMPTY;
  }
  formatterDollar = value => `$ ${value}`;
  parserDollar = value => value.replace('$ ', '');

  constructor(private msg: NzMessageService, private coreService: CoreService, private dashService: DashboardService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.getAllSkills();
    this.initForm();
  }
  initForm() {
    this.projectForm = this.fb.group({
      Title: [''],
      Description: [''],
      Duration: [''],
      Status: ['open'],
      Assisted: [false],
      Budget: this.fb.group({
        minimum: [0],
        maximum: [0]
      })
    });
  }
  beforeUpload = (file: UploadFile): boolean => {
    this.fileList.push(file);
    return false;
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
  PostProject(project: IProject) {
    project.OwnerID = 2;
    project.Jobs = this.listOfSelectedValue;
    project.ProjectType = this.selected2 === true ? 'hourly' : 'fixed';
    this.coreService.submitProjectDetails(project)
      .subscribe(res => {
        project = res;
        this.msg.create('success', 'Project Details uploaded successfully');
        this.uploadFiles(res.ID);
      });
  }

  uploadFiles(projectId: number) {
    const formData = new FormData();
    // tslint:disable-next-line:no-any
    this.fileList.forEach((file: any) => {
      formData.append('files', file);
    });
    this.uploading = true;
    this.coreService.UploadProjectFiles(formData, projectId)
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
