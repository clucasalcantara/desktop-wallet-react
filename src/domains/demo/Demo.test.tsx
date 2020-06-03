import React from "react";
import { render } from "@testing-library/react";

import { Demo } from ".";

test("renders hello world", () => {
	const { getByText } = render(<Demo />);
	const greeting = getByText(/Hello World!/i);
	expect(greeting).toBeInTheDocument();
});
