import {Component,OnInit} from 'angular2/core';
import {Crisis} from './crisis';
import {CrisisService} from "./crisis.service";
import {Router,RouteParams, CanDeactivate, ComponentInstruction} from "angular2/router";
import {DialogService} from '../dialog.service';

@Component({
    template: `
    <div *ngIf="crisis">
        <h2>{{editName}} details!</h2>
        <div><label>id: </label>{{crisis.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="editName" placeholder="name"/>
        </div>
        <button (click) = "save()">Save</button>
        <button (click) = "cancel()">Cancel</button>
    </div>
    `
})

export class CrisisDetailComponent implements OnInit, CanDeactivate{

    public crisis: Crisis;
    public editName: string;

    constructor(private _crisisService: CrisisService,
                private _routeParams: RouteParams,
                private _router: Router,
                private _dialog: DialogService){

    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._crisisService.getCrisis(id).then(crisis => {
            if (crisis) {
                this.editName = crisis.name;
                this.crisis = crisis;
            } else { // id not found
                this.gotoCrisisList();
            }
        });
    }

    routerCanDeactivate(nextInstruction:ComponentInstruction, prevInstruction:ComponentInstruction):any {
        if(!this.crisis || this.editName === this.crisis.name){
            return true;
        }

        return this._dialog.confirm("Discard?");
    }

    cancel(){
        this.editName = this.crisis.name;
        this.gotoCrisisList();
    }

    save(){
        this.crisis.name = this.editName;
        this.gotoCrisisList();
    }

    gotoCrisisList(){
        this._router.navigate(['CrisisCenter']);
    }
}