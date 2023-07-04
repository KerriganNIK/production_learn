import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('returns the base class when no modifiers or additional classes are provided', () => {
        const result = classNames('my-class');
        expect(result).toBe('my-class');
    });

    test('includes additional classes when provided', () => {
        const result = classNames('my-class', undefined, ['extra-class', 'another-class']);
        expect(result).toBe('my-class extra-class another-class');
    });

    test('includes modifier classes when their corresponding value is truthy', () => {
        const mods = {
            'modifier-1': true,
            'modifier-2': false,
            'modifier-3': true,
        };
        const result = classNames('my-class', mods);
        expect(result).toBe('my-class modifier-1 modifier-3');
    });

    test('filters out modifier classes with falsy values', () => {
        const mods = {
            'modifier-1': true,
            'modifier-2': false,
            'modifier-3': '',
        };
        const result = classNames('my-class', mods);
        expect(result).toBe('my-class modifier-1');
    });

    test('combines base class, modifiers, and additional classes correctly', () => {
        const mods = {
            'modifier-1': true,
            'modifier-2': true,
        };
        const result = classNames('my-class', mods, ['extra-class', 'another-class']);
        expect(result).toBe('my-class extra-class another-class modifier-1 modifier-2');
    });
});
