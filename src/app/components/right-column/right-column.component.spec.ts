import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RightColumnComponent } from './right-column.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('RightColumnComponent', () => {
  let component: RightColumnComponent;
  let fixture: ComponentFixture<RightColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightColumnComponent, RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 /** test para que no se visualice debe ser creado */
 it('', () => {
  expect(component).toBeTruthy();
});
});
