import React from 'react';
import { screen, render, cleanup, fireEvent } from '@testing-library/react'
// import Input from '../components/Input';
import App from './app'

describe('App component', () => {
    beforeAll(() => {
        render(<App />)
    })

    it('should have the right message in the dom', () => {
        const message = 'The House of Pets';

        expect(screen.getByText(message)).toBeInTheDocument()
    })

    afterAll(cleanup)
})