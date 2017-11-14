import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Content) content: Content;
  private bottomPadding: any;

  constructor(public navCtrl: NavController) {
  }

  private ngAfterContentInit(): void {
    console.log(this.content.getScrollElement().style)
    setInterval(() => {
      this.bottomPadding = this.content.getScrollElement().style.paddingBottom;
    }, 1000);
  }

}
