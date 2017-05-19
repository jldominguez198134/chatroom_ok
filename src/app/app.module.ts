import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {TextEditorComponent} from "./components/text-editor/text-editor.component";
import {ChatBoardComponent} from "./components/chat-board/chat-board.component";
import {StoreModule} from "@ngrx/store";
import {mainStoreReducer} from "./state-management/reducers/main.reducer";
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {MessagesService} from "./services/messages.service";

@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    ChatBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({mainStoreReducer}),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
