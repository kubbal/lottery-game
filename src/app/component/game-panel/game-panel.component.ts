import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-panel.component.html',
  styleUrl: './game-panel.component.scss'
})
export class GamePanelComponent {
  @Input() panelIndex: number = 0;
  numbers: number[] = Array(49).fill(0).map((_, i) => i + 1);
  selectedNumbers: number[] = [];

  toggleNumber(number: number) {
    const index = this.selectedNumbers.indexOf(number);
    if (index > -1) {
      this.selectedNumbers.splice(index, 1);
    } else if (this.selectedNumbers.length < 6) {
      this.selectedNumbers.push(number);
    }
  }

  generateRandomNumbers() {
    this.selectedNumbers = [];
    while (this.selectedNumbers.length < 6) {
      const randomNum = Math.floor(Math.random() * 49) + 1;
      if (!this.selectedNumbers.includes(randomNum)) {
        this.selectedNumbers.push(randomNum);
      }
    }
  }

  clearSelection() {
    this.selectedNumbers = [];
  }
}
