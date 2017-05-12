import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "./state-management/state/main.state";
import {Actions} from "./state-management/actions/main.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
