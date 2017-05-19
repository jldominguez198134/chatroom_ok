import {Component, Input, OnInit} from '@angular/core';
import {AngularFireDatabase} from "angularfire2";

@Component({
  selector: 'app-chat-board',
  templateUrl: './chat-board.component.html',
  styleUrls: ['./chat-board.component.css']
})
export class ChatBoardComponent implements OnInit {

  listMenssage: Array<any>;

  constructor(private db: AngularFireDatabase) {
    db.list('/messages').subscribe((datos) => {
      this.listMenssage = datos;
    });
    /*store.select('mainStoreReducer').subscribe((state) => {
      this.listMenssage = state['arrayMessage'];
      console.log(this.listMenssage);
    });*/
  }

  ngOnInit() {
  }

}
