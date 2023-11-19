import { Component } from '@angular/core';
import { Animal } from '../animal';
@Component({
    selector: 'app-mouse',
    template: `
    <p>Mouse: <b>{{sound}}</b></p>
    `,
    providers: [{provide: Animal, useExisting: MouseComponent}]
})
export class MouseComponent extends Animal {
    
    sound='';

    makeSound() {
        this.sound= 'chit';
    }
}