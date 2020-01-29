import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SportTrackerNewSharedModule } from 'app/shared/shared.module';

import { DocsComponent } from './docs.component';

import { docsRoute } from './docs.route';

@NgModule({
  imports: [SportTrackerNewSharedModule, RouterModule.forChild([docsRoute])],
  declarations: [DocsComponent]
})
export class DocsModule {}
