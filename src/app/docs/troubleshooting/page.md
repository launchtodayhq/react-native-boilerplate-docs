---
title: Troubleshooting
nextjs:
  metadata:
    title: Troubleshooting
    description: Troubleshooting the React Native Boilerplate
---

While running the boilerplate app, you may encounter certain issues that can impact your experience.
This section of the documentation is designed to assist you with resolving these issues efficiently. If
you encounter any problems not covered here, please do post them in the [#report-a-bug](https://discord.gg/QdsQQEMcj4) Discord channel for prompt support.

## Unmatched Route: Page could not be found

After setting up the boilerplate app (and ensruing you have created the **.env** file), you may encounter a screen that shows **Unmatched Route - Page could not be found**. This is a result of not adding the correct values in the environment variables. Please complete the setup of all the integrations and update the **.env** file accordingly and you should be able to navigate between the screens.

## Invalid Sentry Dsn: sentry.dsn Error

If, after integrating [Supabase](/supabase-setup) and running the app on iOS or Android, you come across the default error screen with the message **Invalid Sentry Dsn: sentry.dsn**. Please be advised it is safe to dismiss the error if you have not completed the [Sentry setup](/monitoring) process.

If you have not configured Sentry, this error should not affect the functionality of your application. It appears because the app is attempting to link to a Sentry Data Source Name (DSN), which has not been provided. If you do not require error logging and monitoring via Sentry, no action is necessary.

However, if you intend to utilize Sentry for monitoring your app's health, please ensure that you have followed the steps outlined in the Sentry setup documentation. Proper configuration will prevent this error from occurring and allow you to take full advantage of Sentry's capabilities for keeping your app stable and performant.

## API request failures when Upload Debug Symbols to Sentry

When you first run the app, you may see the following error:

```js
› Generating debug reactnativestarterpack » reactnativestarterpack.app.dSYM
› Executing reactnativestarterpack » Bundle React Native code and images
› Executing reactnativestarterpack » Upload Debug Symbols to Sentry

❌  error: API request failed
```

This is a result of not setting the Sentry environment variables. Simply go through the Sentry setup [here](/sentry) and make sure you have set the correct environment variables.

## Metro error: Unable to resolve module ../../Utilities/Platform

In-between developing your app, you may encounter an error related to being unable to resolve the `../../Utilities/Platform` directory:

```jsx
Metro error: Unable to resolve module ../../Utilities/Platform from /Users/dev/lewks-app/node_modules/react-native/Libraries/Components/TextInput/TextInputState.js:
None of these files exist:
  * node_modules/react-native/Libraries/Utilities/Platform(.web.ts|.ts|.web.tsx|.tsx|.web.mjs|.mjs|.web.js|.js|.web.jsx|.jsx|.web.json|.json|.web.cjs|.cjs|.web.scss|.scss|.web.sass|.sass|.web.css|.css)
  25 | const {findNodeHandle} = require('../../ReactNative/RendererProxy');
> 26 | const Platform = require('../../Utilities/Platform');
  27 | const React = require('react');
  28 | type ComponentRef = React.ElementRef<HostComponent<mixed>>;
Call Stack
  MetroBundlerDevServer.getStaticResourcesAsync (node_modules/@expo/cli/src/start/server/metro/MetroBundlerDevServer.ts:293:13)
  processTicksAndRejections (node:internal/process/task_queues)
  MetroBundlerDevServer.getStaticPageAsync (node_modules/@expo/cli/src/start/server/metro/MetroBundlerDevServer.ts:349:52)
  getHtml (node_modules/@expo/cli/src/start/server/metro/createServerRouteMiddleware.ts:78:31)
  handler (node_modules/@expo/server/src/index.ts:149:26)
  <unknown> (node_modules/@expo/server/src/vendor/http.ts:36:24)
TypeError: ExpoResponse is not a constructor
    at getHtml (/Users/dev/lewks-app/node_modules/@expo/cli/src/start/server/metro/createServerRouteMiddleware.ts:107:20)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at handler (/Users/dev/lewks-app/node_modules/@expo/server/src/index.ts:149:26)
Web Bundling failed 592ms (node_modules/expo-router/entry.js)
Unable to resolve "../../Utilities/Platform" from "node_modules/react-native/Libraries/Components/TextInput/TextInputState.js"
Server Bundling failed 595ms (node_modules/expo-router/node/render.js)
Unable to resolve "../../Utilities/Platform" from "node_modules/react-native/Libraries/Components/TextInput/TextInputState.js"
```

The issue stems from the [@stripe/stripe-react-native](https://www.npmjs.com/package/@stripe/stripe-react-native?activeTab=readme) library, which currently does not support web compilation. According to Expo's [documentation](https://docs.expo.dev/versions/latest/sdk/stripe/), this library is compatible exclusively with iOS and Android devices/simulators. However, this limitation should not hinder the overall development and building of your app as it pertains solely to the incompatibility of one library with web platforms. The ongoing solution involves leveraging React Native's [Platform-specific extensions](https://reactnative.dev/docs/platform-specific-code#platform-specific-extensions) to ensure that Stripe functionalities are accessible only on mobile platforms, and not on the web (this is currntly WIP).
