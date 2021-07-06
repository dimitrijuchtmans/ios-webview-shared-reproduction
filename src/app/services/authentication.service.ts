import { Injectable } from '@angular/core';
import { IonicAuth } from '@ionic-enterprise/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends IonicAuth{

  constructor() {
    super({
      authConfig: 'keycloak',
      clientID: 'acerta-app',
      discoveryUrl: 'https://a-login.acerta.be/auth/realms/acc/.well-known/openid-configuration',
      iosWebView: 'shared',
      logoutUrl: 'be.acerta.app.acc:/',
      platform: 'capacitor',
      redirectUri: 'be.acerta.app.acc:/',
      scope: 'openid offline_access',
      tokenStorageProvider: 'localStorage'
    });
  }
}
