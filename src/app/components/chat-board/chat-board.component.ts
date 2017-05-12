import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../state-management/state/main.state";

@Component({
  selector: 'app-chat-board',
  templateUrl: './chat-board.component.html',
  styleUrls: ['./chat-board.component.css']
})
export class ChatBoardComponent implements OnInit {

  listMenssage:Array<any>;

  constructor(private store:Store<State>) {
    store.select('mainStoreReducer').subscribe((state) => {
      this.listMenssage = state['arrayMessage'];
      console.log(this.listMenssage);
    });
  }

  ngOnInit() {
  }

}
