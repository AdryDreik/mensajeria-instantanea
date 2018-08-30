import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConversationPage } from '../conversation/conversation';
import { User } from '../../app/interfaces/user';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{
  Users = [];
  constructor(public navCtrl: NavController) {
    this.Users.push({
      nick: 'adry',
      age: 18,
      email: 'adry.dabp@gmail.com',
      friend: 'cinthy',
      uid: '1'
    });
  }
  gotToConversation () {
    this.navCtrl.push(ConversationPage);
  }
}