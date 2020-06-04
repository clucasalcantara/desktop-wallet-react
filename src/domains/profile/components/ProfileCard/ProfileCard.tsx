import React from "react";
import { Card } from "../../../../app/components/Card";

type Props = {
	avatar: string;
	name: string;
	balance: string;
};

export const ProfileCard = ({ avatar, name, balance }: Props) => (
	<Card>
		<div className="relative px-6 sm:flex sm:items-center py-4">
			<button className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 p-1 mt-3">
				{/* <SvgIcon name="settings" view-box="0 0 20 20" /> */}
			</button>

			<div className="flex flex-row justify-between w-full">
				<div className="flex items-center">
					<div className="block w-12 h-12 mx-auto rounded-full sm:mx-0 sm:flex-shrink-0">
						<img className="rounded-full" src={avatar} />
					</div>
					<div className="mt-4 text-center sm:mt-0 sm:ml-4 sm:text-left">
						<p className="text-sm font-semibold text-gray-500">Name</p>
						<p className="font-semibold text-black">{name}</p>
					</div>
				</div>
				<div className="flex items-center">
					<div className="mt-4 text-center sm:mt-0 sm:ml-4 sm:text-right">
						<p className="text-sm font-semibold text-gray-500">Total Balance</p>
						<p className="font-semibold text-black">{balance}</p>
					</div>
				</div>
			</div>
		</div>
	</Card>
);