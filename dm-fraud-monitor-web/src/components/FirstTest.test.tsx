import { render, screen } from '@testing-library/react';
import FirstTest from './FirstTest';

test('renders the title prop', () => {
    render(<FirstTest title="Hello, World!" />);
    const headingElement = screen.getByText(/Hello, World!/i);
    expect(headingElement).toBeInTheDocument();
});
