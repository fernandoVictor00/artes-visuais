import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VotingComponent } from './voting.component';
import { VotingRoutingModule } from './voting-routing.module';

@NgModule({
  declarations: [
    VotingComponent,
  ],
  imports: [
    VotingRoutingModule,
    CommonModule,
  ],
  exports: [],
})
export class VotingModule {}
