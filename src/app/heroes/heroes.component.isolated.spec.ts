import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component";

describe("Heroes Component", () => {
  let HEROES, testHeroSvc, component;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: "test2", strength: 3 },
      { id: 2, name: "sss", strength: 54 },
      { id: 3, name: "tesdddt2", strength: 6 }
    ];
    testHeroSvc = jasmine.createSpyObj(["deleteHero", 'getHeroes']);
    component = new HeroesComponent(testHeroSvc);
  });

  describe("add",()=>{
      it('should add the',()=>{
          testHeroSvc.getHeroes.and.returnValue(of([{name:'Bob'}]))
          component.getHeroes();
          expect(component.heroes).toEqual([{name:'Bob'}])
      })
  })

  describe("delete", () => {
    it("should remove hero", () => {
      component.heroes = HEROES;
      testHeroSvc.deleteHero.and.returnValue(of(true));
       component.delete(HEROES[0]);
      expect(component.heroes.length).toBe(2);
      expect(component.heroes[0]).toBe(HEROES[1])
      expect(component.heroes[1]).toBe(HEROES[2])
      
    });

    it("should call delete method", () => {
        component.heroes = HEROES;
        testHeroSvc.deleteHero.and.returnValue(of(true));
         component.delete(HEROES[0]);
         expect(testHeroSvc.deleteHero).toHaveBeenCalledWith(HEROES[0]);
        expect(testHeroSvc.deleteHero).toHaveBeenCalled();
      });

  });
});
