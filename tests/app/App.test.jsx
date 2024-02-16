import { render } from "@testing-library/react";

import App from "../../src/assets/components/app/App";

describe("App", () => {
  it("renders headline", () => {
    render(<App title="React" />);

    // screen.debug();

    // check if App components renders headline
  });
});
