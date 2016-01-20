/**
 * Created by ozgur.tuzgen on 13.01.2016.
 */
import {Component,Input,Output,EventEmitter} from "angular2/core";
import {RestoreService} from "../restore.service";
import {Hero} from "./hero";

@Component({
    selector: 'hero-editor',
    providers: [RestoreService],
    template:`
    <div>
        <span>Name:</span>
        <input [(ngModel)] = "hero.name"/>
        <div>
            <button (click)="onSaved">save</button>
            <button (click)="onCanceled">cancel</button>
        </div>
    </div>
    `

})
export class HeroEditorComponent{
    @Output() canceled = new EventEmitter();
    @Output() saved = new EventEmitter();

    constructor(private _service: RestoreService){
    }

    @Input
    set hero(hero:Hero){
        this._service.setItem(hero);
    }

    get hero(){
        return this._service.getItem();
    }

    onSaved(){
        this.saved.emit(this._service.getItem());
    }

    onCanceled(){
            this.hero = this._service.restoreItem();
        this.canceled.emit(this.hero);
    }
}