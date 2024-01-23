---
title: Setting up RevenueCat for iOS
nextjs:
  metadata:
    title: Setting up RevenueCat for iOS
    description: Setting up RevenueCat with the React Native Boilerplate
---

## Introduction

[RevenueCat](https://www.revenuecat.com/) is a mobile SDK and API for managing in-app subscriptions. RevenueCat communicates with the App Store and Google Play Store and removes the complexity of taking payments in your app.

This part of the documentation will focus on setting up RevenueCat with the App Store to implement in-app purchases and subscriptions for iOS. The Android counterpart is documented [here](/docs/in-app-purchases-google).

## Prerequisites

- ensure you have created an account with both [App Store Connect](https://appstoreconnect.apple.com/login) and [Google Play Store](https://play.google.com/console/about/?utm_source=google&utm_medium=cpc&utm_campaign=Console2020-Branded&utm_term=google%20play%20console%7ce&utm_content=676107993487&gad_source=1&gclid=EAIaIQobChMI89Ggqo35ggMVqQQGAB0afg7cEAAYASAAEgIGj_D_BwE) - you will be unable to progress onto the next steps without
  both accounts (we will need API keys for setting up your RevenueCat account)
- in-app purchases are [not availabile](https://docs.expo.dev/versions/latest/sdk/in-app-purchases/) on the iOS simulator and Android emulator. **You need
  a physical device to test in-app purchases and subscriptions**

## Create RevenueCat account and project

Head over to [RevenueCat](https://www.revenuecat.com/) and create your account. Once complete, you should be able to create
a new project. Give your project a name and click **_create project_**:

![RevenueCat Setup](/images/revenue-cat-step-1.gif)

Once your project is created, we're interested in setting up two apps: one for iOS and the other for Android. Let's begin with the
former first. Click **_App Store_** and add:

1. an app name (this is the name of your app that will be published)
2. the App Bundle ID (you can find this in the **app.json** under **bundleIdentifier** of the boilerplate)
3. the App Store Connect App-Specific Shared Secret (follow the instructions carefully [here](https://www.revenuecat.com/docs/itunesconnect-app-specific-shared-secret))

![RevenueCat Setup](/images/revenue-cat-step-2.gif)

Upon adding the app name, bundle ID and the secret, click **_save changes_** on the top right. You will then be presented
with the option to set the **_in-app purchase key configuration_** and the **_App Store Connect API_**. Follow the links provided on how to add
the keys:

- In-App Purchase Key Configuration ([link](https://www.revenuecat.com/docs/in-app-purchase-key-configuration))
- App Store Connect API ([link](https://www.revenuecat.com/docs/app-store-connect-api-key-configuration))

![RevenueCat Setup](/images/revenue-cat-apple.png)

The next steps will cover creating in-app purchases and subscriptions in App Store Connect.
