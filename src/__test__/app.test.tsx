import React from 'react';
import { screen, render, cleanup, fireEvent } from '@testing-library/react'
import App from '../app'
import mockData from './mockData.json'
import * as hooks from '../hooks/data';
describe('App component', () => {
    beforeAll(() => {
        jest.spyOn(hooks, 'useData').mockImplementation(() => ({ petsByOwner: mockData.API_RESPONSE, petsByGender: [] }));
        render(<App />)
    })

    it('should have the right message in the dom', () => {
        const message = 'The House of Cats';
        expect(screen.getByText(message)).toBeInTheDocument()
    })

    afterAll(cleanup)
})