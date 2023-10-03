import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcercadeComponent } from './acercade.component';
import { NavbarModule } from '../navbar/navbar.module';
import { AcercadeRoutingModule } from './acercade-routing.module';
import { ChatModule } from '../chat/chat.module';


@NgModule({
  declarations: [
    AcercadeComponent
  ],
  imports: [
    CommonModule,
    AcercadeRoutingModule,
    NavbarModule,
    ChatModule
  ],
  exports: [
    AcercadeComponent
  ]
})
export class AcercadeModule { }
