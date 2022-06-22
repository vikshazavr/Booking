import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from 'src/shared/services/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {}
