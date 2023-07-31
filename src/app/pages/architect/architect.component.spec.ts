import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectComponent } from './architect.component';

describe('ArchitectComponent', () => {
  let component: ArchitectComponent;
  let fixture: ComponentFixture<ArchitectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ArchitectComponent]
    });
    fixture = TestBed.createComponent(ArchitectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
