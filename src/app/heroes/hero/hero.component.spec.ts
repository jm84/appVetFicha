import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { By } from '@angular/platform-browser';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the hero name in the header', () => {
    component.name = 'Superman';
    fixture.detectChanges();
    const header = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(header.textContent).toContain('Superman');
  });

  it('should display the hero age', () => {
    component.age = 30;
    fixture.detectChanges();
    const ageElement = fixture.debugElement.query(
      By.css('dd:nth-of-type(2)')
    ).nativeElement;
    expect(ageElement.textContent).toContain('30');
  });

  it('should call getHeroDescription method', () => {
    spyOn(component, 'getHeroDescription').and.callThrough();
    fixture.detectChanges();
    const descriptionElement = fixture.debugElement.query(
      By.css('dd:nth-of-type(3)')
    ).nativeElement;
    expect(component.getHeroDescription).toHaveBeenCalled();
  });

  it('should display the capitalized name', () => {
    component.name = 'Superman';
    fixture.detectChanges();
    const capitalizedElement = fixture.debugElement.query(
      By.css('dd:nth-of-type(4)')
    ).nativeElement;
    expect(capitalizedElement.textContent).toContain('SUPERMAN');
  });

  it('should call changeHero method when "Cambiar nombre" button is clicked', () => {
    component.name = 'Batman';
    fixture.detectChanges();
    spyOn(component, 'changeHero');
    const button = fixture.debugElement.query(
      By.css('button:nth-of-type(1)')
    ).nativeElement;
    button.click();
    expect(component.changeHero).toHaveBeenCalled();
  });

  it('should call changeAge method when "Cambiar edad" button is clicked', () => {
    component.age = 25;
    fixture.detectChanges();
    spyOn(component, 'changeAge');
    const button = fixture.debugElement.query(
      By.css('button:nth-of-type(2)')
    ).nativeElement;
    button.click();
    expect(component.changeAge).toHaveBeenCalled();
  });
});
