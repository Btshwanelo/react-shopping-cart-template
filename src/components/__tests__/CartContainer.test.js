/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import CartContainer from '../CartContainer.js';

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
// afterEach(cleanup);

it('CheckboxWithLabel changes the text after click', () => {
    act(() => {
        render(<CartContainer />, container);
    });
    expect(container.textContent).toBe("YOUR BAG");
});
