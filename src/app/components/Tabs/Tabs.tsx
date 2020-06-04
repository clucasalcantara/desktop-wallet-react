import React from "react";
import tw, {styled} from "twin.macro";
import { TabContext, useTab, TabId } from "./useTab";

type TabsProps = {
	children: React.ReactNode;
	initialId?: TabId;
	onChange?: (id: TabId) => void;
};

export function Tabs({ children, initialId, onChange }: TabsProps) {
	const context = useTab({ initialId });

	React.useEffect(() => {
		if (context.currentId) {
			onChange?.(context.currentId);
		}
	}, [context.currentId, onChange]);

	return (
		<TabContext.Provider value={context}>
			<div>{children}</div>
		</TabContext.Provider>
	);
}

type TabProps = {
	children: React.ReactNode;
	tabId: string | number;
};

const TabButton = styled.button``;

export const Tab = React.forwardRef<HTMLButtonElement, TabProps>((props: TabProps, ref) => {
    const context = React.useContext(TabContext);
    const isActive = context?.isIdActive(props.tabId);

	return (
		<TabButton ref={ref} aria-selected={isActive} onClick={() => context?.setCurrentId(props.tabId)}>
			{props.children}
		</TabButton>
	);
});
Tab.displayName = "Tab";

export const TabList = styled.div`
    ${tw`inline-flex justify-start items-stretch rounded bg-gray-200 px-3`}

    & > ${TabButton} {
        ${tw`px-5 py-4 border-b-3 font-semibold text-gray-800 text-opacity-75 relative transition-colors ease-in-out duration-300`}

        &[aria-selected="true"] {
            ${tw`border-blue-600 text-opacity-100`}
        }

        &:hover,
		&:focus {
			${tw`outline-none text-opacity-100`};
        }

        & + ${TabButton}:after {
            content: "";
            width: 1px;
            ${tw`h-4 bg-gray-300 absolute left-0 top-1/2 transform -translate-y-1/2 block`};
        }
    }
`;

type TabPanelProps = {
	children: React.ReactNode;
	tabId: string | number;
};

export const TabPanel = React.forwardRef<HTMLDivElement, TabProps>((props: TabPanelProps, ref) => {
    const context = React.useContext(TabContext);
    const isActive = context?.isIdActive(props.tabId);

    if (!isActive) {
        return <></>
    }

	return (
        <div ref={ref}>{props.children}</div>
	);
});
TabPanel.displayName = "TabPanel";