import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonservicioComponent } from './pokemonservicio.component';

describe('PokemonservicioComponent', () => {
  let component: PokemonservicioComponent;
  let fixture: ComponentFixture<PokemonservicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonservicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
