/**
 * Created by ozgur.tuzgen on 28.12.2015.
 */

import {Component,OnInit} from 'angular2/core';
import {Hero} from './hero';
//import {HeroFormComponent} from './hero-form.component';
import {RouteConfig,ROUTER_DIRECTIVES} from "angular2/router";
import {HeroDetailComponent} from './heroes/hero-detail.component';
import {HeroListComponent} from "./heroes/hero-list.component";
import {HeroService} from "./heroes/hero.service";
import {CrisisListComponent} from "./crisis-list.component";

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [HeroService],
    template: `
    <h1>Component Router</h1>
    <nav>
        <a [routerLink]="['CrisisCenter']">Crisis Center</a>
        <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    //template: `
    //<h1>{{title}}</h1>
    //<h2>My Heroes</h2>
    //<hero-form></hero-form>
    //<input #newHero
    //  (keyup.enter)="addHero(newHero.value)"
    //  (blur)="addHero(newHero.value); newHero.value='' ">
    //<button (click)=addHero(newHero.value)>Add</button>
    //<ul class="heroes">
    //  <li [class.selected]="hero === selectedHero" *ngFor="#hero of heroes" (click)="onSelect(hero)">
    //    <span class="badge">{{hero.id}}</span> {{hero.name}}
    //  </li>
    //</ul>
    //<my-hero-detail [hero]="selectedHero"></my-hero-detail>
    //`
})
@RouteConfig([
    {path:'/crisis-center', name:'CrisisCenter',    component:CrisisListComponent},
    {path:'/heroes',        name:'Heroes',          component:HeroListComponent},
    {path:'/hero/:id',      name:'HeroDetail',      component:HeroDetailComponent}
])

export class AppComponent
//implements OnInit
{
    //public title: string = 'Tour of Heroes';
    //public heroes: Hero[];
    //public selectedHero: Hero;
    //
    //public lastRecNumber: number = 55;
    //
    //constructor(private _heroService: HeroService){}
    //
    //ngOnInit(){
    //    this.getHeroes();
    //}
    //
    //onSelect(hero: Hero){
    //    this.selectedHero = hero;
    //}
    //
    //getHeroes(){
    //    this._heroService.getHeroes().then(heroes=> this.heroes = heroes);
    //}
    //
    //addHero(newHero:string){
    //    if(newHero) {
    //        //this.heroes.push({"id":this.lastRecNumber++,"name":newHero});
    //
    //        var ref:Hero = {"id": this.lastRecNumber++, "name": newHero,"power": "Really Smart","alterEgo":"Chuck Overstreet" };
    //
    //        this.heroes.push(ref);
    //    }
    //}
}

