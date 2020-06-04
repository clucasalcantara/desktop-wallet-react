import React from "react";
// UI Elements
import { ListDividedItem } from "./ListDividedItem";

type Props = {
	items: any;
};

const renderItems = (items: any) => (
	<ul>
		{items.map((item: any, index: number) => (
			<ListDividedItem {...item} key={index} />
		))}
	</ul>
);

const ListDivided = ({ items }: Props) => {
	console.log(items);
	const emptyList = <span>empty</span>;

	return items.length ? renderItems(items) : emptyList;
};

ListDivided.defaultProps = {
	items: [],
};

export default ListDivided;
