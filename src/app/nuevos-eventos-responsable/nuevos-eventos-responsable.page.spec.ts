import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevosEventosResponsablePage } from './nuevos-eventos-responsable.page';

describe('NuevosEventosResponsablePage', () => {
  let component: NuevosEventosResponsablePage;
  let fixture: ComponentFixture<NuevosEventosResponsablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevosEventosResponsablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevosEventosResponsablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
