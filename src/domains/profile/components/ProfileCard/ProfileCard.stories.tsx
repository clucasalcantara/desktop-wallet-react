import React from "react";
import { ProfileCard } from "./ProfileCard";
import { withKnobs, text } from "@storybook/addon-knobs";

export default { title: "Components / Profile Card", decorators: [withKnobs] };

const editableProps = {
	name: text("Profile name", "Oleg Gelo"),
	balance: text("Total Balance", "234,500.46 USD"),
	avatar: text("User Avatar", "https://www.w3schools.com/howto/img_avatar.png"),
};

export const Default = () => (
	<ProfileCard className="inline-flex" {...editableProps}>
		ARK Ecosystem
	</ProfileCard>
);
