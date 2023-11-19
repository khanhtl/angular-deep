import { CatComponent } from './../cat/cat.component';
import { Component, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { AnimalDirective } from '../animal.directive';
import { Animal } from '../animal';
@Component({
    selector: 'app-animals',
    template: `
    <ng-content>
    </ng-content>
        <button (click)="makeSound()">Make Sound</button>
    `,
})
export class AnimalsComponent {
    // @ContentChildren('animal') animals!:QueryList<ElementRef>;
    // @ContentChildren(AnimalDirective, {read: CatComponent}) animals!:QueryList<ElementRef>;
    @ContentChildren(Animal) animals!:QueryList<Animal>;

    makeSound() {
        this.animals.forEach(animal => console.log(animal));
        // this.animals.forEach((animal: any) => animal.makeSound());
        this.animals.forEach(animal => animal.makeSound());
    }
}