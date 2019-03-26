import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  username: string;
  isDisabled: boolean;

  constructor() { }

  ngOnInit() {
    this.username = '';
    this.isDisabled = true;
  }

  onChangeInput() {
    this.isDisabled = this.username === '';
  }

  onReset() {
    this.username = '';
    this.isDisabled = true;
  }
}
