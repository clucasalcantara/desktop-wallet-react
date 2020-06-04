import React from "react";
import { injectIntl, WrappedComponentProps } from "react-intl";
import { withTheme } from "styled-components";
//TODO: Deal with relative paths
import { imagesConfig } from "../../../../resources/assets/images";
// UI Elements
import { Button } from "../../../../app/components/Button";

type Props = {} & WrappedComponentProps;

const profileAssets = imagesConfig.pages.profile;
const commonAssets = imagesConfig.common;

const Welcome = ({ intl: { formatMessage } }: Props) => {
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

				{/* 
                { 
                    profiles.length && 
                        <div className="container mx-auto">
                            <div className="mx-auto my-8 md:w-3/4 lg:w-3/5 xl:w-1/2">
                                <h1 className="mx-4 text-2xl font-bold md:mx-8 xl:mx-16">Select Profile</h1>
                                <div className="mx-4 mt-2 text-gray-700 md:mx-8 xl:mx-16">
                                    You already have a profile, you can choose any of them
                                </div>
                            </div>

                            <div
                                v-for="profile in profiles"
                                :key="profile.id()"
                                className="max-w-lg mx-auto mb-3 overflow-hidden bg-white border-2 border-gray-300 rounded-lg"
                            >
                                <div className="relative px-6 sm:flex sm:items-center py-7">
                                    <button className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 p-1 mt-3">
                                        <SvgIcon name="settings" view-box="0 0 20 20" />
                                    </button>

                                    <div className="flex flex-row justify-between w-full">
                                        <div className="flex items-center">
                                            <div
                                                :style="{
                                                    'background-color': '#c1272a',
                                                    'background-image': profile.avatar(),
                                                }"
                                                className="block object-cover w-12 h-12 mx-auto rounded-full sm:mx-0 sm:flex-shrink-0"
                                            ></div>
                                            <div className="mt-4 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                <p className="text-sm font-semibold text-gray-500">
                                                    Name
                                                </p>
                                                <p className="font-semibold text-black">
                                                    {{ profile.name() }}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="mt-4 text-center sm:mt-0 sm:ml-4 sm:text-right">
                                                <p className="text-sm font-semibold text-gray-500">
                                                    Total Balance
                                                </p>
                                                <p className="font-semibold text-black">
                                                    234,500.46 USD
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 

                            <div className="max-w-lg mx-auto mt-10 border-t border-gray-300"></div>
                        </div> 
                }
                */}

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

export default injectIntl(withTheme(Welcome));
