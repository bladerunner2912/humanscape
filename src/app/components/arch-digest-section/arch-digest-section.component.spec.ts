import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchDigestSectionComponent } from './arch-digest-section.component';

describe('ArchDigestSectionComponent', () => {
  let component: ArchDigestSectionComponent;
  let fixture: ComponentFixture<ArchDigestSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ArchDigestSectionComponent]
    });
    fixture = TestBed.createComponent(ArchDigestSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
