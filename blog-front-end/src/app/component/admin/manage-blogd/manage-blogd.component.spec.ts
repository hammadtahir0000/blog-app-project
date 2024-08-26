import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBlogdComponent } from './manage-blogd.component';

describe('ManageBlogdComponent', () => {
  let component: ManageBlogdComponent;
  let fixture: ComponentFixture<ManageBlogdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageBlogdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageBlogdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
