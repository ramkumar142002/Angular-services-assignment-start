import { Component } from '@angular/core';
import { UserService } from './users.service';
// import { CounterService } from './counet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent {
  
}
