import { AnimalDirective } from './animal.directive';
import { RockComponent } from './rock/rock.component';
import { MouseComponent } from './mouse/mouse.component';
import { CatComponent } from './cat/cat.component';
import { AnimalsComponent } from './animals/animals.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceSelectorComponent } from './service-selector.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ServiceSelectorComponent,
    AnimalsComponent,
    CatComponent,
    MouseComponent,
    RockComponent,
    AnimalDirective
  ],
  exports: [ServiceSelectorComponent]
})
export class ServiceSelectorModule { }
