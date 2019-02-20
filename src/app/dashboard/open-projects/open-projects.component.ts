import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/shared/models/project';
import { DashboardService } from '../dashboard.service';
import { CoreService } from 'src/app/core/core.service';
import { ISkill } from 'src/app/shared/models/skill';

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
  formatterDollar = value => `$ ${value}`;
  parserDollar = value => value.replace('$ ', '');
  constructor(private dashService: DashboardService, private coreService: CoreService) { }

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
        if (this.listOfSelectedValueLabel[i] === this.listOfSkills[k].Title ) {
            this.listOfSelectedValue.push(this.listOfSkills[k]);
        }
      }
    }
    console.log('full selected...', this.listOfSelectedValue);
  }
}
