import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBahiaComponent } from './hero-bahia.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeroBahiaComponent', () => {
  let component: HeroBahiaComponent;
  let fixture: ComponentFixture<HeroBahiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroBahiaComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroBahiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/** test para que no se visualice debe ser creado */
 it('', () => {
  expect(component).toBeTruthy();
});
});
