import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {SalamatService} from '../../shared/services/salamat.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  CurrentuUser: any;

  constructor(private service: SalamatService, private router: Router) {
  }

  ngOnInit() {

  }

  Login(form: NgForm) {
    if (form.value != null || form.value != undefined) {
      let loginFormat = {
        Email: form.value.UserName,
        Password: form.value.Password
      };
      const formJsonObject = JSON.stringify(loginFormat);
      this.service.Login(formJsonObject).subscribe(res => {
        this.CurrentuUser = res;

        if (this.CurrentuUser.Token && this.CurrentuUser.userType && this.CurrentuUser.access) {
          localStorage.setItem('Token', this.CurrentuUser.Token);
          localStorage.setItem('userType', this.CurrentuUser.userType);
          localStorage.setItem('access', this.CurrentuUser.access);
          this.router.navigate(['/pages/index']);
        }
      });

    }
  }
}
