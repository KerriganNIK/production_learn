import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Sidebar Component', () => {
    it('renders without crashing', () => {
        const { container } = componentRender(<Sidebar />);
        expect(container).toBeInTheDocument();
    });

    it('should toggle collapsed state when button is clicked', () => {
        const { getByText } = componentRender(<Sidebar />);
        const toggleButton = getByText(/</);

        fireEvent.click(toggleButton);
        expect(toggleButton.textContent).toBe('>');

        fireEvent.click(toggleButton);
        expect(toggleButton.textContent).toBe('<');
    });

    it('should render main and about links', () => {
        const { getByText } = componentRender(<Sidebar />);
        expect(getByText('Главная')).toBeInTheDocument();
        expect(getByText('О сайте')).toBeInTheDocument();
    });
});
