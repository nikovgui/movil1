import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssistPage } from './assist.page';

describe('AssistPage', () => {
  let component: AssistPage;
  let fixture: ComponentFixture<AssistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
