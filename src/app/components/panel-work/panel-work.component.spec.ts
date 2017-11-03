import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelWorkComponent } from './panel-work.component';

describe('PanelWorkComponent', () => {
  let component: PanelWorkComponent;
  let fixture: ComponentFixture<PanelWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
