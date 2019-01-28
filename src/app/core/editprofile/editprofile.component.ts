import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {
  userId: number;
  constructor(private coreService: CoreService) { }

  ngOnInit() {
  }

  initUserForm() {

  }
  getUser() {
    this.coreService.getUserByID(1)
    .subscribe(res => {

    },
    error => {
      console.log(error);
    });
  }
}
