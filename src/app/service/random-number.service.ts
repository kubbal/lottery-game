import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberService {

  constructor() { }

  generateRandomNumbers(count: number, max: number = 49): number[] {
    if (count > max)
      throw Error(`Count (${count}) cannot be greater than max (${max})`);
    
    const randomNumbers = new Set<number>();

    while (randomNumbers.size < count) {
      const randomNum = Math.floor(Math.random() * max) + 1;
      randomNumbers.add(randomNum);
    }

    return Array.from(randomNumbers);
  }
}
