import { describe, expect, test } from 'vitest'
import { add, multiply, subtract } from './math.helper'

describe('add', () => {
    test('should add two positives numbers', () => {

        // ! 1. Arrange
        const a = 1;
        const b = 2;

        // ! 2. Act
        const result = add(a, b);

        // ! 3. Assert
        expect(result).toBe(3);

    });
})

describe('subtract', () => {
    test('should subtract two negative numbers', () => {

        // ! 1. Arrange
        const a = -1;
        const b = -2;

        // ! 2. Act
        const result = subtract(a, b);

        // ! 3. Assert
        expect(result).toBe(a - b);

    });
    test('should subtract one negative number', () => {

        // ! 1. Arrange
        const a = -1;
        const b = 2;

        // ! 2. Act
        const result = subtract(a, b);

        // ! 3. Assert
        expect(result).toBe(a - b);

    });
})

describe('multiply', () => {
    test('should multiply two positive numbers', () => {

        // ! 1. Arrange
        const a = 5;
        const b = 2;

        // ! 2. Act
        const result = multiply(a, b);

        // ! 3. Assert
        expect(result).toBe(a * b);

    });
    test('should subtract one negative number', () => {

        // ! 1. Arrange
        const a = -1;
        const b = 2;

        // ! 2. Act
        const result = multiply(a, b);

        // ! 3. Assert
        expect(result).toBe(a * b);

    });
})