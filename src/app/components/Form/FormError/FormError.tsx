import React from "react";

type Props = {
	error: string;
};

const FormError = ({ error }: Props) => <span className="inline-block mt-1 text-theme-danger-500">{error}</span>;

export { FormError };
