import {Component,OnInit} from 'angular2/core';
import {Crisis} from './crisis';
import {CrisisService} from "./crisis.service";
import {Router,RouteParams} from "angular2/router";

@Component({
    template: `
    <div *ngIf="crisis">
        <h2>{{crisis.name}} details!</h2>
        <div><label>id: </label>{{crisis.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="crisis.name" placeholder="name"/>
        </div>
        <button (click) = "gotoCrisisList()">Back</button>
    </div>
    `
})

export class CrisisDetailComponent implements OnInit{

    public crisis: Crisis;

    constructor(private _crisisService: CrisisService,
                private _routeParams: RouteParams,
                private _router: Router){

    }

    ngOnInit() {
        let id = this._routeParams.get('id');
        this._crisisService.getCrisis(id).then(crisis => this.crisis = crisis);
    }

    gotoCrisisList(){
        this._router.navigate(['CrisisCenter']);
    }
}