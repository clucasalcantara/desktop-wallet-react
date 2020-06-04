import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { IntlProvider } from "react-intl";
import { ThemeProvider } from "styled-components";
// i18n
import translations from "./i18n/locales";
// Routes
import { routes } from "./router";
// Styles
import "./styles/index.css";

const locale = "en-US";

const theme = {
	colors: {
		black: "#000",
	},
};

ReactDOM.render(
	<HashRouter>
		<IntlProvider locale={locale} messages={translations["en-US"].messages}>
			<ThemeProvider theme={theme}>{renderRoutes(routes)}</ThemeProvider>
		</IntlProvider>
	</HashRouter>,
	document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
