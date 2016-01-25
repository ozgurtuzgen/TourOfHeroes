import {Hero} from "../heroes/hero";
/**
 * Created by ozgur.tuzgen on 21.01.2016.
 */
describe("1st tests", ()=>{
    it('true is true', () => expect(true).toEqual(true));

    it('null is not the same thing with undefined',()=> expect(null).not.toEqual(undefined));

    it('hero class test',()=>{
        var hero=  new Hero();
        hero.id=1;
        hero.name="Test Hero";

        expect(hero.id).toEqual(1);
    });
})
