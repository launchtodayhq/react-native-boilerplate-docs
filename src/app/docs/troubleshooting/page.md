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

## Android Gradle plugin requires Java 17 to run. You are currently using Java 16 _or_ The operation couldn't be completed. Unable to locate Java Runtime

When running the boilerplate app on the Android emulator, you might encounter Java version issues or problems in locating the Java Runtime, indicated by errors such as "Android Gradle plugin requires Java 17 to run. You are currently using Java 16" or "The operation couldn't be completed. Unable to locate Java Runtime.":

```js
FAILURE: Build failed with an exception.

* Where:
Build file '/Users/paulwaweru/Projects/launchtodayhq/react-native-boilerplate-upgraded/android/app/build.gradle' line: 1

* What went wrong:
A problem occurred evaluating project ':app'.
> Failed to apply plugin 'com.android.internal.application'.
   > Android Gradle plugin requires Java 17 to run. You are currently using Java 16.
      Your current JDK is located in /Library/Java/JavaVirtualMachines/adoptopenjdk-16.jdk/Contents/Home
      You can try some of the following options:
       - changing the IDE settings.
       - changing the JAVA_HOME environment variable.
       - changing `org.gradle.java.home` in `gradle.properties`.
       ...

// or

> Building app...
The operation couldn't be completed. Unable to locate a Java Runtime
Please visit http://www.java.com for information on installing Java.
```

To resolve this, ensure you have installed Android Studio. You then need to head over to Preferences (using command + , on your keyboard) > Build, Execution, Deployment > Build Tools > Gradle and ensure the Gradle JDK is set to the required version. As of January 24, 2024, using the jbr-17 runtime should solve these issues.

![Java version](/images/java-version.png)

## Credentials Need Attention - Permissions to call Subscriptions API.

When [setting up RevenueCat for the Google Play Store](https://www.revenuecat.com/docs/creating-play-service-credentials), you might encounter a permissions issue with your Service Account Credentials, particularly regarding access to the subscriptions API. To navigate this smoothly, follow these steps carefully:

![RevenueCat Creds](/images/revenuecat-creds.png)

Here is a list of checks to ensure this works:

1. Ensure the **AndroidManifest.xml** file is unchanged and has the **BILLING** permission enabled:

```js
...
 <uses-permission android:name="android.vending.BILLING"/>
...
```

2. Use **eas build -p android** to create an Android App Bundle (AAB). This bundle is what you'll upload to the Google Play Store

{% callout type="warning" title="Update the versionCode and versionName for every new upload" %}
Always update the **versionCode** and **versionName** for each new AAB upload. The Google Play Store uses versionCode to identify each unique build, and synchronizing the versionName with versionCode keeps your app versions organized.
{% /callout %}

3. Navigate to the App bundle explorer on the Google Play Store and upload the AAB file you generated in the previous step.
   ![Download Aab and upload to Google Play Store](/images/aab.gif)

4. Create a new internal testing release track and add the uploaded AAB. Don't forget to also set up a list of internal testers for this release.
   ![Attach AAB to Internal Release Track](/images/upload-aab.gif)
   ![Create internal testers for release](/images/internal-testers.gif)

After completing these steps, you may need to generate a new Service Account Credentials JSON file by following the instructions provided [here](https://www.revenuecat.com/docs/creating-play-service-credentials). Once done, it's advisable to allow approximately 24-48 hours for these credentials to synchronize with RevenueCat.

## Error: xcrun exited with non-zero code: 115

While running `yarn ios` as part of starting the app with the iOS simulator, you may encounter this error:

```js
Error: xcrun exited with non-zero code: 115
An error was encountered processing the command (domain=LSApplicationWorkspaceErrorDomain, code=115):
Simulator device returned an error for the requested operation.
Underlying error (domain=LSApplicationWorkspaceErrorDomain, code=115):
	The operation couldn’t be completed. (LSApplicationWorkspaceErrorDomain error 115.)
Error: xcrun exited with non-zero code: 115
    at ChildProcess.completionListener (/Users/...
```

To fix this error, simply run `yarn start` to start the development server which will remove the error.
