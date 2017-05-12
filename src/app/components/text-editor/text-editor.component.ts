import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../state-management/state/main.state";
import {Actions} from "../../state-management/actions/main.actions";

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

  constructor(private store:Store<State>) {
    this.userHolder = 'Nombre de usuario';
    this.messageHolder = 'Tu mensaje';
  }

  ngOnInit() {

  }

  enviaMsg() {
    console.log(this.msgs);
    this.store.dispatch({
      type: Actions.INCREMENT,
      payload: {
        message: this.msgs,
        user: this.user
      }
    });
  }
}
