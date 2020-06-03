import React from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';

type Props = {} & WrappedComponentProps;

const Demo = ({ intl: { formatMessage } }: Props) => (
  <div className="flex justify-center items-center">
    <h1 className="text-2xl">
      {`Welcome to the ${formatMessage({ id: 'COMMON_APP_NAME' })}`}
    </h1>
  </div>
);

export default injectIntl(Demo);
