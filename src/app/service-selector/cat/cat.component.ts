import { Component } from '@angular/core';
import { Animal } from '../animal';
@Component({
    selector: 'app-cat',
    template: `
    <p>Cat: <b>{{sound}}</b></p>
    `,
    providers: [{provide: Animal, useExisting: CatComponent}]

})
export class CatComponent extends Animal {
    
    sound='';

    makeSound() {
        this.sound= 'meow';
    }
}