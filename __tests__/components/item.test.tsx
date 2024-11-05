// __tests__/Item.test.tsx
import { render, screen } from '@testing-library/react';
import { Item } from '@/components/Item';
import { ItemProps } from '@/models/item';
import '@testing-library/jest-dom';

const mockItem: ItemProps = {
  id: '1',
  title: 'Test Item',
  price: {
    currency: 'USD',
    amount: 100,
    decimals: 0,
  },
  picture: '/test-image.jpg',
  condition: 'new',
  description: 'Test description',
  free_shipping: true,
};

describe('Item Component', () => {
  it('renders correctly with given props', () => {
    render(
    <Item {...mockItem} />
    );

    // Verifica que el título y el precio se renderizan correctamente
    expect(screen.getByText(mockItem.title)).toBeInTheDocument();
    expect(screen.getByText(mockItem.price.amount.toString())).toBeInTheDocument();

    // Verifica que el enlace de redirección tenga el id correcto
    const linkElement = screen.getByRole('link', { name: /test item/i });
    expect(linkElement).toHaveAttribute('href', `/items/${mockItem.id}`);

    // Verifica que se muestra la imagen de envío gratis si `free_shipping` es true
    const freeShippingIcon = screen.getByAltText('Envío gratis');
    expect(freeShippingIcon).toBeInTheDocument();

    // Verifica la condición del item
    expect(screen.getByText(mockItem.condition)).toBeInTheDocument();
  });
});
