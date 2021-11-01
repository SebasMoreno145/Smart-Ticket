import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventosResponsablePage } from './eventos-responsable.page';

describe('EventosResponsablePage', () => {
  let component: EventosResponsablePage;
  let fixture: ComponentFixture<EventosResponsablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosResponsablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventosResponsablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
