import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Example } from "./example";

describe("Example", () => {
  it("debe renderizar el texto correctamente", () => {
    render(<Example title="this is an example" />);
    expect(
      screen.getByRole("heading", { name: /this is an example/i })
    ).toBeInTheDocument();
  });
});
