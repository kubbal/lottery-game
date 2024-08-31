import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { RandomNumberService } from '../../service/random-number.service';
import { PanelInterface } from '../../model/panel.interface';

@Component({
  selector: 'app-game-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-panel.component.html',
  styleUrl: './game-panel.component.scss'
})
export class GamePanelComponent {
  @Input() panel!: PanelInterface;
  @Output() numberToggle = new EventEmitter<{ panelId: number, number: number }>();
  @Output() clearPanelEmitter = new EventEmitter<{ panelId: number }>();

  numbers: number[] = Array(49).fill(0).map((_, i) => i + 1);
  selectedNumbers: number[] = [];
  randomNumberService = inject(RandomNumberService);

  toggleNumber(number: number) {
    if (this.selectedNumbers.length < 6) {
      this.selectedNumbers.push(number);
      this.numberToggle.emit({ panelId: this.panel.id, number: number+1 });
    }
  }

  clearSelection() {
    this.selectedNumbers = [];
    this.clearPanelEmitter.emit({ panelId: this.panel.id });
  }

  generateRandomNumbers() {
    this.clearSelection();
    const randomNumbers = this.randomNumberService.generateRandomNumbers(6);
    randomNumbers.forEach(num => {
      this.selectedNumbers.push(num)
      this.numberToggle.emit({ panelId: this.panel.id, number: num+1 });
    });
  }
}
