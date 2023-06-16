import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscriberCreateupdateComponent } from './suscriber-createupdate.component';

describe('SuscriberCreateupdateComponent', () => {
  let component: SuscriberCreateupdateComponent;
  let fixture: ComponentFixture<SuscriberCreateupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuscriberCreateupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuscriberCreateupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
