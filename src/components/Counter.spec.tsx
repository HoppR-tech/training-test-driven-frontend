import Counter from "./Counter.tsx";
import {render, screen, fireEvent} from "@testing-library/react";

describe('Counter component specs', () => {

    it('starts at 0', () => {
        // when
        render(<Counter></Counter>);

        const button = screen.getByRole('button');

        // then
        expect(button.textContent).toBe('0');
    })

    it('increments by one', () => {
        // given
        render(<Counter></Counter>);
        const button = screen.getByRole('button');

        // when
        fireEvent.click(button);

        // then
        expect(button.textContent).toBe('1');
    })

    it('increments three times', () => {
        // given
        render(<Counter></Counter>);
        const button = screen.getByRole('button');

        // when
        fireEvent.click(button);
        fireEvent.click(button);
        fireEvent.click(button);

        // then
        expect(button.textContent).toBe('3');
    })

})