import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Signup from "../Components/Signup";

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

it("renders with or without a name", () => {
  act(() => {
    render(<Signup />, container);
  });
  expect(container.textContent).toBe("Hey, stranger");

  // act(() => {
  //   render(<Hello name="Jenny" />, container);
  // });
  // expect(container.textContent).toBe("Hello, Jenny!");

  // act(() => {
  //   render(<Hello name="Margaret" />, container);
  // });
  // expect(container.textContent).toBe("Hello, Margaret!");
});