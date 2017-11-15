import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {By, DomSanitizer} from "@angular/platform-browser";
import {RouterTestingModule} from "@angular/router/testing";
import {RouterOutlet} from "@angular/router";
import {MatIconRegistry} from "@angular/material";
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers:[
        MatIconRegistry
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the OTP app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have a router-outlet component', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let theRouter = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(theRouter).not.toBe(null);
  }));
});
