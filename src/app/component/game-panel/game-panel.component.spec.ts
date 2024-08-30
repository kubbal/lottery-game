import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePanelComponent } from './game-panel.component';

describe('GamePanelComponent', () => {
  let component: GamePanelComponent;
  let fixture: ComponentFixture<GamePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamePanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle number selection', () => {
    component.toggleNumber(1);
    expect(component.selectedNumbers.includes(1)).toBe(true);
  });

  it('should generate 6 random numbers', () => {
    component.generateRandomNumbers();
    expect(component.selectedNumbers.length).toBe(6);
  });
});
