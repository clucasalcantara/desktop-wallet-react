import React from "react";
// UI Elements
import { ListDividedItem } from "./ListDividedItem.jsx";

type Props = {
	items: Array<any>;
};

const renderItems = (items) => (
	<ul>
		{items.map((item, index) => (
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
