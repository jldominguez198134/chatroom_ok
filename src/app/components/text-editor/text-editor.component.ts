import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {MessagesService} from "../../services/messages.service";

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {

  msgs: string;
  user: string;
  userHolder: string;
  messageHolder: string;

  constructor(private messagesService: MessagesService) {
    this.userHolder = 'Nombre de usuario';
    this.messageHolder = 'Tu mensaje';
  }

  ngOnInit() {

  }

  enviaMsg() {
    console.log(this.msgs);
    this.messagesService.pushMessage({
      message: this.msgs,
      username: this.user
    });
  }
}
