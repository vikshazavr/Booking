import { Component, OnInit } from '@angular/core';
import { ButtonLabels } from 'src/shared/enums/button-labels.enum';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth.header.component.html',
  styleUrls: ['./auth.header.component.scss'],
})
export class AuthHeaderComponent implements OnInit {
  buttonLabels = ButtonLabels;
  ngOnInit(): void {}
}
