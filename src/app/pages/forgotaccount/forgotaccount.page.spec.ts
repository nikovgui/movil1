import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgotaccountPage } from './forgotaccount.page';

describe('ForgotaccountPage', () => {
  let component: ForgotaccountPage;
  let fixture: ComponentFixture<ForgotaccountPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotaccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
