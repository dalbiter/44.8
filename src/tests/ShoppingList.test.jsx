import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ShoppingList from '../ShoppingList';
import { expect, it } from 'vitest';

it("renders without crashing", () => {
    render(<ShoppingList />);
});

it("matches snaphsot", () => {
    const { asFragment } = render(<ShoppingList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add new item", () => {
    const { queryByText, getByLabelText } = render(<ShoppingList />)
    const input = screen.getByLabelText('Product');
    const btn = queryByText("Add to List");
    expect(queryByText('Product Name: Chocolate Milk')).not.toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'Chocolate Milk'} });
    fireEvent.submit(btn);
    expect(queryByText('Product Name: Chocolate Milk')).toBeInTheDocument();
});