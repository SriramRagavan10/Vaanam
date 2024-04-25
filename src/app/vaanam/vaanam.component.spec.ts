import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaanamComponent } from './vaanam.component';

describe('VaanamComponent', () => {
  let component: VaanamComponent;
  let fixture: ComponentFixture<VaanamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VaanamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VaanamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
