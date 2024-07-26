import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaySearchComponent } from './replay-search.component';

describe('ReplaySearchComponent', () => {
  let component: ReplaySearchComponent;
  let fixture: ComponentFixture<ReplaySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReplaySearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReplaySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
