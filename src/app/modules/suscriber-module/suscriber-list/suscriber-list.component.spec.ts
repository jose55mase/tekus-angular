import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscriberListComponent } from './suscriber-list.component';

describe('SuscriberListComponent', () => {
  let component: SuscriberListComponent;
  let fixture: ComponentFixture<SuscriberListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuscriberListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuscriberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
