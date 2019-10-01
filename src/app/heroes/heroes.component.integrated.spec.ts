import { HeroesComponent } from "./heroes.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HeroService } from "../hero.service";
import { HttpClientModule } from "@angular/common/http";
import { MessageService } from "../message.service";
import { of } from "rxjs";
import { HeroComponent } from "../hero/hero.component";

describe("Should return heroes from service", () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let component: HeroesComponent;
  let mockHeroService;
  let HEROES;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: "test2", strength: 3 },
      { id: 2, name: "sss", strength: 54 },
      { id: 3, name: "tesdddt2", strength: 6 }
    ];

    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [HeroesComponent],
      providers: [HeroService, MessageService],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.debugElement.componentInstance;
    mockHeroService = jasmine.createSpyObj(["deleteHero", "getHeroes"]);
    component = new HeroesComponent(mockHeroService);
  });

  it("Should Create Heroes Component", () => {
    expect(component).toBeTruthy();
    expect(component.heroes).toBe(undefined);
  });

  it("Should Get Heroes from Service", () => {
    // const mockHeroService = fixture.debugElement.injector.get(HeroService);
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    component.getHeroes();
    fixture.detectChanges();
    expect(component.heroes).toBeGreaterThanOrEqual(HEROES);
  });
});
