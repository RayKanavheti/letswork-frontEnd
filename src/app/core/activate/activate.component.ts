import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss']
})
export class ActivateComponent implements OnInit {
uuidCode: any;
  constructor(private authSerice: AuthService, private route: ActivatedRoute, private router: Router) {
    route
    .queryParams
    .subscribe(params => {
      this.uuidCode = route.snapshot.queryParams['usercode'];
    });
    console.log('uuid code...', this.uuidCode);
  }

  ngOnInit() {
    this.getUserByuuidcode();
  }

  getUserByuuidcode() {
    this.authSerice.getUserByUUIDCode(this.uuidCode)
      .subscribe(userData => {
        console.log('Reg Response....', userData);
        this.router.navigateByUrl('/login');
      });
  }
}
