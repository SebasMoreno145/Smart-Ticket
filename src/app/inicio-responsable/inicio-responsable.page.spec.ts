import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InicioResponsablePage } from './inicio-responsable.page';

describe('InicioResponsablePage', () => {
  let component: InicioResponsablePage;
  let fixture: ComponentFixture<InicioResponsablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioResponsablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InicioResponsablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
