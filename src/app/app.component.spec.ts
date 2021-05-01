import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('shoud NO render title Block when title is vacio', () => {
    component.title = '';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('[for-test="viewTitle"]')).toBeTruthy();
    
  });

  it('El valor de la suma', waitForAsync(()=>{
    expect(component.suma(2,2)).toEqual(4);
  }));

  it('La suma debe dar 4', waitForAsync(()=>{
    // Recorre el html y simula el flujo
    (<HTMLInputElement>document.getElementById('num1')).value = '2';
    (<HTMLInputElement>document.getElementById('num2')).value = '2';
    document.getElementById('calc')?.click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBe('4');
  }));
});
