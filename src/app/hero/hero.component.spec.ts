import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

describe("Hero component shallow test", () => {
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports:[HttpClientModule ],
      declarations: [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(HeroComponent);
  });

  it("Should have the correct hero", () => {
    let testHero = { id: 1, name: "Iron man", strength: 20 };
    fixture.componentInstance.hero = testHero;
    expect(fixture.componentInstance.hero).toBe(testHero);
  });

  it("Should render the name inside the achor tag", () => {
    let testHero = { id: 1, name: "Iron man", strength: 20 };
    fixture.componentInstance.hero = testHero;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector("a").innerHTML).toContain(
      "Iron man"
    );
  });
});
