// __tests__/components/Detail.test.tsx
import { render, screen } from '@testing-library/react';
import { Detail } from '@/components/detail';
import '@testing-library/jest-dom';

// Mock de next/image
jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  },
}));

describe('Detail Component', () => {
  // Mock data para las pruebas
  const mockItem = {
    id: '1',
    title: 'iPhone 12',
    price: {
      currency: 'USD',
      amount: 999,
      decimals: 99
    },
    picture: '/test-image.jpg',
    condition: 'new',
    free_shipping: true,
    sold_quantity: 256,
    description: 'This is a test description for the iPhone 12'
  };

  it('renders all item details correctly', () => {
    render(<Detail {...mockItem} />);

    // Verifica la imagen
    const image = screen.getByAltText(mockItem.title);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockItem.picture);

    expect(screen.getByText(mockItem.title)).toBeInTheDocument();
    expect(screen.getByText('NEW - 256 vendidos')).toBeInTheDocument();
    expect(screen.getByText(mockItem.price.amount.toString())).toBeInTheDocument();
    expect(screen.getByText(mockItem.price.decimals.toString())).toBeInTheDocument();
    expect(screen.getByText(mockItem.price.currency)).toBeInTheDocument();

    expect(screen.getByText('Comprar')).toBeInTheDocument();

    expect(screen.getByText('Descripción del producto')).toBeInTheDocument();
    expect(screen.getByText(mockItem.description)).toBeInTheDocument();
  });

  it('handles missing price properties gracefully', () => {
    const itemWithoutPrice = {
      ...mockItem,
      price: {}
    };

    render(<Detail {...itemWithoutPrice} />);
    
    // Verifica que el componente se renderice sin errores
    expect(screen.getByText(mockItem.title)).toBeInTheDocument();
  });

  it('formats condition text correctly', () => {
    const itemWithUsedCondition = {
      ...mockItem,
      condition: 'used'
    };

    render(<Detail {...itemWithUsedCondition} />);
    
    expect(screen.getByText('USED - 256 vendidos')).toBeInTheDocument();
  });

  it('renders with minimal props', () => {
    const minimalItem = {
      id: '1',
      title: 'Test Product',
      picture: '/test.jpg',
      condition: 'new',
      description: 'Test description',
      price: {
        currency: 'USD',
        amount: 0,
        decimals: 0
      },
      free_shipping: false,
      sold_quantity: 0
    };

    render(<Detail {...minimalItem} />);
    
    // Verifica que los elementos esenciales estén presentes
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByAltText('Test Product')).toBeInTheDocument();
  });

  it('applies correct CSS classes', () => {
    render(<Detail {...mockItem} />);

    // Verifica que las clases CSS se apliquen correctamente
    expect(screen.getByText(mockItem.title)).toHaveClass('detailTitle');
    expect(screen.getByText('Comprar')).toHaveClass('detailButton');
    expect(screen.getByText('Descripción del producto')).toHaveClass('detailDescriptionTitle');
  });
});