import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutcardComponent } from './aboutcard.component';

describe('AboutcardComponent', () => {
  let component: AboutcardComponent;
  let fixture: ComponentFixture<AboutcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
