import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { ChatRoutingModule } from './chat-routing.module';
import { NavbarModule } from '../navbar/navbar.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    NavbarModule,
    FormsModule
  ],
  exports:[
    ChatComponent
  ]
})
export class ChatModule { }
