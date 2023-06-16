import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscriberPegeComponent } from './suscriber-pege.component';

describe('SuscriberPegeComponent', () => {
  let component: SuscriberPegeComponent;
  let fixture: ComponentFixture<SuscriberPegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuscriberPegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuscriberPegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
