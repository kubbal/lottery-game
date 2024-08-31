import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { RandomNumberService } from '../../service/random-number.service';

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
  randomNumberService = inject(RandomNumberService);

  toggleNumber(number: number) {
    const index = this.selectedNumbers.indexOf(number);
    if (index > -1) {
      this.selectedNumbers.splice(index, 1);
    } else if (this.selectedNumbers.length < 6) {
      this.selectedNumbers.push(number);
    }
  }

  clearSelection() {
    this.selectedNumbers = [];
  }

  generateRandomNumbers() {
    this.clearSelection();
    const randomNumbers = this.randomNumberService.generateRandomNumbers(6);
    randomNumbers.forEach(num => this.selectedNumbers.push(num));
  }
}
