import React from "react";
import { injectIntl, WrappedComponentProps } from "react-intl";
//TODO: Deal with relative paths
import { imagesConfig } from "../../../../resources/assets/images";
// UI Elements
import { Button } from "../../../../app/components/Button";
import { ProfileCard } from "../../components/ProfileCard";

type Props = {
	profiles: Array<any>;
} & WrappedComponentProps;

const profileAssets = imagesConfig.pages.profile;
const commonAssets = imagesConfig.common;

const Welcome = ({ intl: { formatMessage }, profiles }: Props) => {
	return (
		<div className="w-full h-full bg-white">
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="flex items-center h-20 md:h-24">
					<div className="flex p-2 rounded-lg bg-red-logo">
						<img src={commonAssets.ARKLogo} className="h-6 md:h-8 lg:h-10" />
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center text-center">
				<h1 className="mb-8 text-4xl font-bold">{formatMessage({ id: "COMMON_WELCOME" })}</h1>
				<div className="container w-3/5 mx-auto">
					<img src={profileAssets.OnboardingBanner} />
				</div>

				{profiles.length && (
					<div className="container mx-auto">
						<div className="w-full my-8">
							<h1 className="mx-4 text-2xl font-bold md:mx-8 xl:mx-16">Select Profile</h1>
							<div className="mx-4 mt-2 text-gray-700 md:mx-8 xl:mx-16">
								You already have a profile, you can choose any of them
							</div>
						</div>

						{profiles.map((profile) => (
							<ProfileCard {...profile} key={profile.id} />
						))}
						<div className="max-w-lg mx-auto mt-10 border-t border-gray-300"></div>
					</div>
				)}

				<div className="mx-4 mt-8 mb-4 text-gray-700 md:mx-8 xl:mx-16">
					Create a new Profile or login with your MarketSquare account to get started
				</div>
				<div className="flex justify-center w-full mb-10">
					<Button color="primary" variant="solid" className="w-1/5 mr-2">
						Sign in to MarketSquare
					</Button>
					<Button color="primary" variant="plain" className="w-1/5">
						Create Profile
					</Button>
				</div>
			</div>
		</div>
	);
};

Welcome.defaultProps = {
	profiles: [],
};

export default injectIntl(Welcome);
