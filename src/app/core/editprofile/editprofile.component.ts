import { Component, OnInit } from '@angular/core';

import { CoreService } from '../core.service';
import { IUser } from 'src/app/shared/models/user';

import { ISkill } from 'src/app/shared/models/skill';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {
  UserObj: IUser = {};
  startdate: any;
  endDate: any;
  loaded = false;
  calender = { 'width': '100%' };
  listOfSkills: ISkill[] = [];
  listOfSelectedValue: ISkill[] = [];
  constructor(private coreService: CoreService) {

  }

  ngOnInit() {
    this.getUser();
    this.getAllSkills();
  }

  initUserForm() {

  }
  getUser() {
    this.coreService.getUserByID(1)
      .subscribe(res => {
        this.UserObj = res;
        this.loaded = true;
        if (this.UserObj.Educations.length === 0) {
          this.UserObj.Educations.push({ Period: { StartDate: '', EndDate: '' }, InstitutionName: '', EducationType: '' });
        }

        if (this.UserObj.Portfolios.length === 0) {
          this.UserObj.Portfolios.push({ 'Name': '', 'Link': '' });
        }
        if (this.UserObj.Skills.length > 0) {
          for (let a = 0; a < this.UserObj.Skills.length; a++) {
            this.listOfSelectedValue.push(this.UserObj.Skills[a]);
          }
          console.log(this.listOfSelectedValue);
        }
      

        console.log('User Object', res);
      },
        error => {
          console.log(error);
        });
  }
  getAllSkills(): void {
    this.coreService.getAllSkills()
      .subscribe(skills => {
        this.listOfSkills = skills;
        console.log(this.listOfSkills);
      });
  }
  RemoveEducation(i: number) {
    this.UserObj.Educations.splice(i, 1);
    console.log('object', this.UserObj);
  }
  AddEducation() {
    this.UserObj.Educations.push({ Period: { StartDate: '', EndDate: '' }, InstitutionName: '', EducationType: '' });
    console.log('object', this.UserObj);
  }
  AddPortfolio() {
    this.UserObj.Portfolios.push({ 'Name': '', 'Link': '' });
  }
  RemovePortifolio(i: number) {
    this.UserObj.Portfolios.splice(i, 1);
  }
  updateProfile() {
    console.log('to be submitted', this.UserObj);
    this.coreService.updateUser(this.UserObj)
      .subscribe(user => {
        this.UserObj = user;
        console.log('updated user', user);
      },
      error => {
        console.log(error);
      });
  }
}
