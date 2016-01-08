/**
 * Created by ozgur.tuzgen on 08.01.2016.
 */
import {Component,OnInit} from 'angular2/core'
import {Router} from "angular2/router";
import {HeroService} from "./hero.service";

@Component({
    template: `
    <h2>HEROES LIST</h2>
        <ul>
          <li [class.selected]="hero === selectedHero" *ngFor="#hero of heroes" (click)="onSelect(hero)">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
          </li>
        </ul>
    `
})
export class HeroListComponent implements OnInit{

    public heroes: Hero[];

    constructor(private _router: Router,private _service: HeroService){
    }

    ngOnInit(){
        this._service.getHeroes().then(heroes=> this.heroes = heroes);
    }

    onSelect(hero: Hero){
        this._router.navigate(['HeroDetail', {id: hero.id}]);
    }
}