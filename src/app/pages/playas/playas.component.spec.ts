import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayasComponent } from './playas.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PlayasComponent', () => {
  let component: PlayasComponent;
  let fixture: ComponentFixture<PlayasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayasComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/** test para que no se visualice debe ser creado */
 it('', () => {
  expect(component).toBeTruthy();
});
});
