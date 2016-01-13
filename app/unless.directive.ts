/**
 * Created by ozgur.tuzgen on 13.01.2016.
 */
import {Input,Directive,ViewContainerRef, TemplateRef} from "angular2/core";

@Directive({
    selector: '[customUnless]'
})
export class UnlessDirective{
    constructor(private _templateRef: TemplateRef,
                private _viewContainerRef: ViewContainerRef){

    }

    @Input() set customUnless(condition: boolean){
        if(!condition){
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
        else {
            this._viewContainerRef.clear();
        }
    }
}
