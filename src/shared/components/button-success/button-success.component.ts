import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-success',
  templateUrl: './button-success.component.html',
  styleUrls: ['./button-success.component.scss'],
})
export class ButtonSuccessComponent implements OnInit {
  @Input() label!: string;
  constructor() {}

  ngOnInit(): void {}
}
