import { Component } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private authenticationService: AuthenticationService) {}

  async login() {
    await this.authenticationService.login();
  }
}
