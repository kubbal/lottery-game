import { Component } from '@angular/core';
import { GamePanelComponent } from '../game-panel/game-panel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [GamePanelComponent, CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  panels = [0, 1, 2, 3];

  play() {
    this.panels.forEach((_, index) => {
      const panelComponent = <GamePanelComponent>(document.querySelector(`app-game-panel[panelIndex="${index}"]`) as unknown);
      const selectedNumbers = panelComponent.selectedNumbers;
      if (selectedNumbers.length === 6) {
        console.log(`Panel ${index + 1}: [${selectedNumbers.join(', ')}]`);
      } else if (selectedNumbers.length === 0) {
        console.log(`Panel ${index + 1}: empty`);
      } else if (selectedNumbers.length < 6) {
        console.log(`Panel ${index + 1}: Error: ${6 - selectedNumbers.length} marks are missing`);
      } else {
        console.log(`Panel ${index + 1}: Error: Please remove ${selectedNumbers.length - 6} mark(s)`);
      }
    });
  }
}
