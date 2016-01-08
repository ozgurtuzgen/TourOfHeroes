import {Component} from "angular2/core";
import {NgForm} from "angular2/common";
import {Hero} from './heroes/hero';
/**
 * Created by ozgur.tuzgen on 04.01.2016.
 */
@Component({
    selector:'hero-form',
    templateUrl: 'app/hero-form.component.html'
})
export class HeroFormComponent{

    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];

    model:Hero ={"id":18,"name":"Dr IQ","power": this.powers[0],"alterEgo":"Chuck Overstreet" };

    submitted = false;

    onSubmit(){
        this.submitted = true;
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}
