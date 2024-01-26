---
title: Setting up the React Native Boilerplate
nextjs:
  metadata:
    title: Setting up the React Native Boilerplate
    description: Quidem magni aut exercitationem maxime rerum eos.
---

## Clone the project

Start by cloning the repository by running the following command:

```js
git clone git@github.com:launchtodayhq/react-native-boilerplate-upgraded.git [YOUR_APP_NAME]
```

Alternatively, you can download the source code directly from the latest release:

- [Source code (zip)](https://github.com/launchtodayhq/react-native-boilerplate-upgraded/archive/refs/tags/2.0.1.zip)
- [Source code (tar.gz)](https://github.com/launchtodayhq/react-native-boilerplate-upgraded/archive/refs/tags/2.0.1.tar.gz)

Once complete, run the following commands to install the dependencies and make a copy of the \***\*.env.example\*\*** file (we'll be making changes to the copied file late):

```js
cd[YOUR_APP_NAME]
yarn
cp.env.example.env
```

You will the be able to run the app using **npx expo run** where you will be prompted to choose which platform you'd like to run the app on. Alternatively, you can use the following commands:

```js
yarn run ios
// or
yarn run android
```

{% callout type="warning" title="The app isn't quite ready to run yet" %}
The boilerplate app and it's integrations are not immediately ready for use. There are several steps
required to ensure each integration works as expected, including creating accounts and generating API keys. Please continue following the guide - next, we'll be setting up Sentry for monitoring the health of your app.
{% /callout %}

{% quick-links %}

{% quick-link title="Troubleshooting" icon="warning" href="/docs/troubleshooting" description="Checkout this guide for troubleshooting steps. Still stuck? Feel free to post in the Discord channel for help." /%}

{% /quick-links %}
