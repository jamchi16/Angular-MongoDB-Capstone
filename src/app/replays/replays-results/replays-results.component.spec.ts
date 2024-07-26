import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaysResultsComponent } from './replays-results.component';

describe('ReplaysResultsComponent', () => {
  let component: ReplaysResultsComponent;
  let fixture: ComponentFixture<ReplaysResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReplaysResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReplaysResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
