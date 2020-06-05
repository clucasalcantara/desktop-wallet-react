import React from "react";

type Props = {
	isFloatingLabel: boolean;
	labelClass: string;
	label: string;
	labelDescription: string;
	itemLabelDescriptionClass: string;
	value: string;
	itemValueClass: string;
	content: React.ReactNode;
};

export const ListDividedItem = ({
	isFloatingLabel,
	labelClass,
	label,
	labelDescription,
	itemLabelDescriptionClass,
	value,
	itemValueClass,
	content,
}: Props) => (
	<li className="flex flex-col w-full py-4 ListDividedItem mb-5">
		<div className={`flex justify-between ${isFloatingLabel ? "flex-col items-start" : "items-center"}`}>
			<div className="flex flex-col ListDividedItem__container__label">
				<span className={`mr-5 ListDividedItem__label ${labelClass}`}>{label}</span>
				{labelDescription && (
					<span
						className={`text-sm text-theme-neutral ListDividedItem__label__description ${itemLabelDescriptionClass}`}
					>
						{labelDescription}
					</span>
				)}
			</div>
			{value && (
				<div className={`ListDividedItem__value ${itemValueClass}`}>
					<span>{value}</span>
				</div>
			)}
		</div>
		{content && <div className="mt-4">{content}</div>}
	</li>
);
