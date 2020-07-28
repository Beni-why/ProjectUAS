import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectuasComponent } from './projectuas.component';

describe('ProjectuasComponent', () => {
  let component: ProjectuasComponent;
  let fixture: ComponentFixture<ProjectuasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectuasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectuasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
