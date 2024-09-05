import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleNineComponent } from './module-nine.component';

describe('ModuleNineComponent', () => {
  let component: ModuleNineComponent;
  let fixture: ComponentFixture<ModuleNineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuleNineComponent]
    });
    fixture = TestBed.createComponent(ModuleNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
