import React, { useState } from "react";
// UI Elements
import { Tabs, TabPanel } from "../../../../app/components/Tabs";
import { Button } from "../../../../app/components/Button";
import { StepIndicator } from "../../../../app/components/StepIndicator";

const ImportWallet = () => {
	const [activeIndex, setActiveIndex] = useState(1);

	return (
		<div className="flex flex-col items-center justify-center w-full">
			<Tabs initialId={1} className="w-2/4" onChange={setActiveIndex}>
				<StepIndicator size={2} activeIndex={activeIndex}></StepIndicator>

				<TabPanel tabId={1} overrideActiveIndex={activeIndex}>
					<div className="mt-10 ImportWallet__content">
						<div className="ImportWallet__content_header">
							<p className="text-4xl font-bold ImportWallet__header__title">Network for import</p>
							<p className="ImportWallet__header__subtitle text-medium">
								Select the network where you want to import your wallet
							</p>
						</div>
						<div className="mt-5 ImportWallet__networks">
							{/* <Card
                                v-for="network in networks"
                                :key="network.name"
                                className="mb-3"
                                :title="network.name"
                                :selected="network.name === selectedNetwork"
                                @click.native="selectNetwork(network.name)"
                            ></Card> */}
						</div>
					</div>
					<div className="mt-10">
						<Button color="primary" variant="solid" onClick={() => setActiveIndex(2)}>
							Continue
						</Button>
					</div>
				</TabPanel>

				<TabPanel tabId={2} overrideActiveIndex={activeIndex}>
					<div className="mt-10 ImportWallet__content">
						<div className="ImportWallet__content_header">
							<p className="text-4xl font-bold ImportWallet__header__title">Import Wallet</p>
							<p className="ImportWallet__header__subtitle text-medium">
								Enter your wallet password in order to get full access to your money. Or you can choose
								an address for vieweing only.
							</p>
						</div>
						<div className="flex flex-row items-center justify-between mt-8 ImportWallet__content_address--toggle">
							<div>
								<p className="text-xl font-bold">Use the address only</p>
								<p className="text-sm ImportWallet__header__subtitle">
									You can only view your wallet but not send money.
								</p>
							</div>
							{/* <Toggle v-model="form.addressOnly" :checked="form.addressOnly" /> */}
						</div>
						<div v-if="form.addressOnly" className="mt-8 ImportWallet__content_address--input">
							{/* <Input type="text" :model="form.address" label="Address" icon="qrcode" /> */}
						</div>
						<div v-if="!form.addressOnly" className="mt-8 ImportWallet__content_password--input">
							{/* <Input type="text" :model="form.password" label="Your password" icon="qrcode" /> */}
						</div>
					</div>
					<div className="mt-10">
						<Button color="primary" variant="plain" onClick={() => setActiveIndex(1)}>
							Back
						</Button>
						<Button color="primary" variant="solid" className="ml-2">
							Go to Wallet
						</Button>
					</div>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export { ImportWallet };
