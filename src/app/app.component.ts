import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiTicketService } from './ticket.service';
import { TrainRoot } from './tickets.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public url = '/assets/json/tickets.json';
  public tickets$: Observable<TrainRoot[]> = this.api.getListOfTicket(this.url);

  constructor(private api: ApiTicketService) {}
}
