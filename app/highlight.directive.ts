/**
 * Created by ozgur.tuzgen on 11.01.2016.
 */
import {Directive,Renderer,ElementRef,Input} from "angular2/core";

@Directive({
    selector: '[customHighlight]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class HighlightDirective{
    @Input('customHighlight') highlightColor:string ;

    @Input() set defaultColor(colorName:string){
        if(colorName){
            this._defaultColor = colorName;
        }
    }

    private _defaultColor = "red";

    constructor(private _el: ElementRef, private _renderer:Renderer){
        //el.nativeElement.style.backgroundColor = 'yellow';
        //renderer.setElementStyle(el,'backgroundColor','yellow');
    }

    onMouseEnter(){
        this._highlight(this.highlightColor || this._defaultColor);
    }

    onMouseLeave(){
        this._highlight(null);
    }

    private _highlight(color:string){
        this._renderer.setElementStyle(this._el,'backgroundColor',color);
    }

}