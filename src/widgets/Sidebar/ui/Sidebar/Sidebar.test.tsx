import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('renders without errors', () => {
        render(<Sidebar />);
    });

    test('initially not collapsed', () => {
        const { container } = render(<Sidebar />);
        const sidebarElement = container.firstChild;
        expect(sidebarElement).not.toHaveClass('collapsed');
    });

    test('toggles collapse state when button is clicked', () => {
        const { container, getByText } = render(<Sidebar />);
        const toggleButton = getByText('toggle');
        const sidebarElement = container.firstChild;

        fireEvent.click(toggleButton);
        expect(sidebarElement).toHaveClass('collapsed');

        fireEvent.click(toggleButton);
        expect(sidebarElement).not.toHaveClass('collapsed');
    });

    test('passes className prop to the root element', () => {
        const customClassName = 'custom-class';
        const { container } = render(<Sidebar className={customClassName} />);
        const sidebarElement = container.firstChild;
        expect(sidebarElement).toHaveClass('Sidebar');
        expect(sidebarElement).toHaveClass(customClassName);
    });

    test('renders ThemeSwitcher component', () => {
        const { getByTestId } = render(<Sidebar />);
        const themeSwitcherComponent = getByTestId('theme-switcher');
        expect(themeSwitcherComponent).toBeInTheDocument();
    });
});
