import { TestBed } from '@angular/core/testing';

import { RandomNumberService } from './random-number.service';

describe('RandomNumberService', () => {
  let service: RandomNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate the correct number of random numbers', () => {
    const count = 10;
    const randomNumbers = service.generateRandomNumbers(count);
    expect(randomNumbers.length).toBe(count);
  });

  it('should generate unique random numbers', () => {
    const count = 20;
    const randomNumbers = service.generateRandomNumbers(count);
    const uniqueNumbers = new Set(randomNumbers);

    expect(uniqueNumbers.size).toBe(count);
  });

  it('should generate numbers within the specified range', () => {
    const count = 15;
    const max = 49;
    const randomNumbers = service.generateRandomNumbers(count, max);

    randomNumbers.forEach(num => {
      expect(num).toBeGreaterThanOrEqual(1);
      expect(num).toBeLessThanOrEqual(max);
    });
  });

  it('should generate all possible numbers when count equals max', () => {
    const max = 49;
    const randomNumbers = service.generateRandomNumbers(max);
    const uniqueNumbers = new Set(randomNumbers);

    expect(uniqueNumbers.size).toBe(max);
    for (let i = 1; i <= max; i++) {
      expect(uniqueNumbers.has(i)).toBeTrue();
    }
  });

  it('should throw an error when count is greater than max', () => {
    const count = 50;
    const max = 49;
    expect(() => service.generateRandomNumbers(count, max)).toThrowError(
      `Count (${count}) cannot be greater than max (${max})`
    );
  });
});
