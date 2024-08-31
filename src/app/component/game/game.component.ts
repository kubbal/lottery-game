import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelInterface } from '../../model/panel.interface';
import { GamePanelComponent } from '../game-panel/game-panel.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, GamePanelComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  panels: PanelInterface[] = [
    { id: 0, selectedNumbers: new Set<number>() },
    { id: 1, selectedNumbers: new Set<number>() },
    { id: 2, selectedNumbers: new Set<number>() },
    { id: 3, selectedNumbers: new Set<number>() }
  ];

  results: string[] = [];

  play() {
    this.results = this.panels.map(panel => {
      const count = panel.selectedNumbers.size;
      const needed = 6;
      const displayId = panel.id + 1;
      if (count === needed) {
        return `Panel ${displayId}: [${Array.from(panel.selectedNumbers).sort().join(', ')}]`;
      } else if (count === 0) {
        return `Panel ${displayId}: empty`;
      } else if (count < needed) {
        return `Panel ${displayId}: Error: ${needed - count} marks are missing`;
      } else {
        return `Panel ${displayId}: Error: Please remove ${count - needed} mark(s)`;
      }
    });
  }

  onNumberToggle(event: { panelId: number, number: number }): void {
    const panel = this.panels.find(p => p.id === event.panelId);
    if (panel) {
      if (panel.selectedNumbers.has(event.number)) {
        panel.selectedNumbers.delete(event.number);
      } else {
        panel.selectedNumbers.add(event.number);
      }
    }
  }

  onClearPanel(event: { panelId: number; }) {
    this.panels[event.panelId].selectedNumbers.clear();
  }
}
