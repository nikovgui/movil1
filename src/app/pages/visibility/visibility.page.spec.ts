import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisibilityPage } from './visibility.page';

describe('VisibilityPage', () => {
  let component: VisibilityPage;
  let fixture: ComponentFixture<VisibilityPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VisibilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
