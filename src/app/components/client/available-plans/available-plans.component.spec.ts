import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AvailablePlansComponent } from './available-plans.component';

describe('AvailablePlansComponent', () => {
  let component: AvailablePlansComponent;
  let fixture: ComponentFixture<AvailablePlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailablePlansComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailablePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /** test para que no se visualice debe ser creado */
 it('', () => {
  expect(component).toBeTruthy();
});
});
