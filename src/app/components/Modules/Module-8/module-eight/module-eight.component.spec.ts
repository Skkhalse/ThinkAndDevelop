import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleEightComponent } from './module-eight.component';

describe('ModuleEightComponent', () => {
  let component: ModuleEightComponent;
  let fixture: ComponentFixture<ModuleEightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuleEightComponent]
    });
    fixture = TestBed.createComponent(ModuleEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
