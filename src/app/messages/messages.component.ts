import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // must be PUBLIC because you are going to bind
  // it in the template !
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
