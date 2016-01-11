/**
 * Created by ozgur.tuzgen on 08.01.2016.
 */
import {Component,OnInit} from 'angular2/core'
import {Router,RouteParams} from "angular2/router";
import {CrisisService} from "./crisis.service";

@Component({
    template: `
    <h2>CRISIS LIST</h2>
        <ul>
          <li [class.selected]="isSelected(crisis)" *ngFor="#crisis of crisisList" (click)="onSelect(crisis)">
            <span class="badge">{{crisis.id}}</span> {{crisis.name}}
          </li>
        </ul>
    `
})
export class CrisisListComponent implements OnInit{

    private _selectedId: number;
    public crisisList: Crisis[];

    constructor(private _router: Router,
                private _service: CrisisService,
                routeParams: RouteParams){
        this._selectedId = +routeParams.get('id');
    }

    ngOnInit(){
        this._service.getCrisisList().then(crisisList=> this.crisisList = crisisList);
    }

    onSelect(crisis: Crisis){
        this._router.navigate(['CrisisDetail', {id: crisis.id}]);
    }

    isSelected(hero:Hero){
        return hero.id===this._selectedId;
    }
}