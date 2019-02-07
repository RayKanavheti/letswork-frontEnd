import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { CoreService } from 'src/app/core/core.service';
import { ISkill } from 'src/app/shared/models/skill';
import { FormGroup, FormBuilder } from '@angular/forms';

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
    width    : '100%',
    textAlign: 'center'
  };
  selected1 = false;
  selected2 = false;
  listOfSelectedValue: ISkill[] = [];
  projectForm: FormGroup;
  formatterDollar = value => `$ ${value}`;
  parserDollar = value => value.replace('$ ', '');

  constructor(private msg: NzMessageService, private coreService: CoreService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getAllSkills();
  }
  initForm() {
this.projectForm = this.fb.group({

});
  }
  handleChange({ file, fileList }): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
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
  PostProject() {
 
  }
}
