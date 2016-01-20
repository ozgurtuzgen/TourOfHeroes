/**
 * Created by ozgur.tuzgen on 13.01.2016.
 */
import {Component,Input} from "angular2/core";
import {Hero} from "./hero";

@Component({
    selector: 'hero-card',
    template:`
    <div>
        <span> Name:</span>
        <span>{{hero.name}}</span>
    </div>
    `
})
export class HeroCardComponent{
    @Input() hero:Hero;
}
