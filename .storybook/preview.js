import React from 'react';
import { addDecorator } from '@storybook/react';
import { setIntlConfig, withIntl } from 'storybook-addon-intl'
// Preview layout
import Layout from './Layout';
// i18n
import translations from '../src/i18n'

const getMessages = locale => translations[locale]

setIntlConfig({
  locales: ['en-US'],
  defaultLocale: 'en-US',
  getMessages
})

addDecorator(withIntl)
addDecorator(storyFn => <Layout>{storyFn()}</Layout>);






