import React from "react";
import { injectIntl, WrappedComponentProps } from "react-intl";
//TODO: Deal with relative paths
import { imagesConfig } from "../../../../resources/assets/images";
// UI Elements
import { Button } from "../../../../app/components/Button";
import { ListDivided } from "../../../../app/components/ListDivided";
import { SvgIcon } from "../../../../app/components/SvgIcon";

type Props = {} & WrappedComponentProps;

const commonAssets = imagesConfig.common;

const item = {
	isFloatingLabel: true,
	label: "New Profile",
	labelDescription: "Select Profile Image",
	itemLabelClass: "text-2xl font-semibold text-black",
	itemLabelDescriptionClass: "text-sm font-semibold text-gray-700",
	content: (
		<div className="flex flex-row mt-2">
			<div className="flex items-center justify-center w-24 h-24 mr-6 border-2 border-gray-300 border-dashed rounded">
				<button type="button" className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full">
					<SvgIcon className="text-blue-600" name="upload" />
				</button>
			</div>
			{/* <!-- TODO (BP): use for avatar: background-image: url("data:image/svg+xml...") --> */}
			<div className="relative w-24 h-24 bg-gray-400 rounded">
				<img src="https://randomuser.me/api/portraits/men/3.jpg" className="object-cover rounded" />
				<button className="absolute flex items-center justify-center w-6 h-6 p-1 bg-red-100 rounded -top-3 -right-3">
					<SvgIcon name="close" height={12} width={12} />
				</button>
			</div>
		</div>
	),
};

const CreateProfile = ({ intl: { formatMessage } }: Props) => {
	return (
		<div className="w-full h-full bg-white">
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="flex items-center h-20 md:h-24">
					<div className="flex p-2 rounded-lg bg-red-logo">
						<img src={commonAssets.ARKLogo} className="h-6 md:h-8 lg:h-10" />
					</div>
				</div>
			</div>

			<div className="container mx-auto">
				<div className="mx-auto my-8 md:w-3/4 lg:w-3/5 xl:w-1/2">
					<h1 className="mx-4 text-2xl font-bold md:text-4xl md:mx-8 xl:mx-16">Create Profile</h1>
					<div className="mx-4 mt-2 text-gray-700 md:mx-8 xl:mx-16">
						Create a new Profile or login with your MarketSquare account to get started.
					</div>

					<div className="mx-4 mt-5 md:mx-8 xl:mx-16">
						<Button color="primary" variant="solid" className="w-full">
							Login with MarketSquare
						</Button>
						<div className="pt-4 mt-8 border-t border-gray-300"></div>
					</div>
				</div>
			</div>

			<div className="mx-auto my-8 md:w-3/4 lg:w-3/5 xl:w-1/2">
				<div className="mb-4">
					<div className="flex flex-1">
						<div className="w-full">
							<ListDivided items={[item]} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default injectIntl(CreateProfile);
