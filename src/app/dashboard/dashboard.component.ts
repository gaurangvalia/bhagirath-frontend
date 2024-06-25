import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  @HostBinding('class') public classes: string = 'd-flex flex-column h-100 overflow-hidden';
}
