import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleSevenComponent } from './module-seven.component';

describe('ModuleSevenComponent', () => {
  let component: ModuleSevenComponent;
  let fixture: ComponentFixture<ModuleSevenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuleSevenComponent]
    });
    fixture = TestBed.createComponent(ModuleSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
