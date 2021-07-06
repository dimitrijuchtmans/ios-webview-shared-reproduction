import {Component, OnInit} from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform
  ) {

  }

  async ngOnInit(): Promise<void> {
    await this.platform.ready();
    await SplashScreen.hide();
  }
}
