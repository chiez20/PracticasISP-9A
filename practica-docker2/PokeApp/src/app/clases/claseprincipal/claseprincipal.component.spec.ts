import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaseprincipalComponent } from './claseprincipal.component';

describe('ClaseprincipalComponent', () => {
  let component: ClaseprincipalComponent;
  let fixture: ComponentFixture<ClaseprincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaseprincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaseprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
