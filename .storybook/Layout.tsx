import React from "react";
import { ThemeProvider } from "styled-components";
import "../src/styles/index.css";

const theme = {
	colors: {
		black: "#000",
	},
};

const Layout = ({ children }) => (
	<ThemeProvider theme={theme}>
		<div className="p-5 w-full h-full">{children}</div>
	</ThemeProvider>
);

export default Layout;
