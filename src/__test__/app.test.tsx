import { describe, test, expect } from 'vitest'
import { screen, render } from '@testing-library/react'

import App from "../App"



describe("testing the testing environment", () => {
    test("test the render", () => {
        const { container } = render(<App />);

        screen.debug();

        expect(container).toBeInTheDocument();
    })
})