import { Component } from '@angular/core';
import { NgxPopoverCardComponent } from './popover-example.component';

@Component({
  selector: 'ngx-replies',
  styleUrls: ['./replies.component.scss'],
  templateUrl: './replies.component.html',
})
export class RepliesComponent {

  cardComponent = NgxPopoverCardComponent;

}
