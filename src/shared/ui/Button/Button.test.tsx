import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';
import '@testing-library/jest-dom/extend-expect';

describe('Button', () => {
    test('renders children correctly', () => {
        const { getByText } = render(<Button>Click me</Button>);
        expect(getByText('Click me')).toBeInTheDocument();
    });

    test('applies custom className', () => {
        const { container } = render(<Button className="custom-class">Button</Button>);
        expect(container.firstChild).toHaveClass('custom-class');
    });

    test('applies theme class based on prop', () => {
        const { container } = render(<Button theme={ButtonTheme.CLEAR}>Button</Button>);
        expect(container.firstChild).toHaveClass('clear');
    });

    test('calls onClick handler when clicked', () => {
        const onClick = jest.fn();
        const { getByText } = render(<Button onClick={onClick}>Click me</Button>);
        fireEvent.click(getByText('Click me'));
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
