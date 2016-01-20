/**
 * Created by ozgur.tuzgen on 08.01.2016.
 */
import {Component,OnInit} from 'angular2/core'
import {Router} from "angular2/router";
import {HeroService} from "./hero.service";
import {HeroCardComponent} from "./hero-card.component";
import {HeroEditorComponent} from "./hero-editor.component";
import {EditItem} from "../edit-item";
import {Hero} from "./hero";

//(click)="onSelect(hero)" [class.selected]="hero === selectedHero"

@Component({
    selector: 'heroes-list',
    template: `
    <div>
      <ul>
        <li *ngFor="#editItem of heroes">
          <hero-card
            [hidden]="editItem.editing"
            [hero]="editItem.item">
          </hero-card>
          <button
            [hidden]="editItem.editing"
            (click)="editItem.editing = true">
              edit
          </button>
          <hero-editor
            (saved)="onSaved(editItem, $event)"
            (canceled)="onCanceled(editItem)"
            [hidden]="!editItem.editing"
            [hero]="editItem.item">
          </hero-editor>
        </li>
      </ul>
    </div>`,
    directives: [HeroCardComponent, HeroEditorComponent]
})
export class HeroListComponent implements OnInit{

    public heroes: Array<EditItem<Hero>>;

    constructor(private _router: Router,private _service: HeroService){
    }

    ngOnInit(){
        //this.heroes = this._service.getHeroes().then
        //                                    .map(item => new EditItem(item));
        //this._service.getHeroes().then(heroes=> this.heroes = heroes.map(item=> new EditItem(item)));
        this.heroes = this._service.getHeroesArray().map(item=> new EditItem(item));
    }

    //onSelect(hero: Hero){
    //    this._router.navigate(['HeroDetail', {id: hero.id}]);
    //}

    onSaved(editItem:EditItem<Hero>, updatedHero:Hero){
        editItem.item = updatedHero;
        editItem.editing = false;
    }

    onCanceled(editItem:EditItem<Hero>){
        editItem.editing = false;
    }
}