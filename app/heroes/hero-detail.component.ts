import {Component,OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from "./hero.service";
import {Router,RouteParams} from "angular2/router";

@Component({
    //selector:'my-hero-detail',
    template: `
    <div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name"/>
        </div>
        <button (click) = "gotoHeroes()">Back</button>
    </div>
    `,
    //inputs: ['hero']
})

export class HeroDetailComponent implements OnInit{

    public hero: Hero;

    constructor(private _heroService: HeroService,
                private _routeParams: RouteParams,
                private _router: Router){

    }

    ngOnInit() {
        let id = this._routeParams.get('id');
        this._heroService.getHero(id).then(hero => this.hero = hero);
    }

    gotoHeroes(){
        this._router.navigate(['Heroes']);
    }
}