---
title: Setting up RevenueCat with App Store Connect
nextjs:
  metadata:
    title: Setting up RevenueCat with App Store Connect
    description: etting up RevenueCat with App Store Connect
---

## Introduction

[RevenueCat](https://www.revenuecat.com/) is a mobile SDK and API for managing in-app subscriptions. RevenueCat communicates with the App Store and Google Play Store and removes the complexity of taking payments in your app.

This part of the documentation will focus on setting up RevenueCat with the App Store to implement in-app purchases and subscriptions for iOS. The Android counterpart is documented [here](/docs/revenue-cat-setup-google).

## Prerequisites

- ensure you have created an account with [App Store Connect](https://appstoreconnect.apple.com/login) - you will be unable to progress onto the next steps without
  both accounts (we will need API keys for setting up your RevenueCat account)
- in-app purchases are [not availabile](https://docs.expo.dev/versions/latest/sdk/in-app-purchases/) on the iOS simulator. **You need
  a physical device to test in-app purchases and subscriptions**

## Create RevenueCat account and project

Head over to  [RevenueCat](https://www.revenuecat.com/) and create your account. Once complete, you should be able to create
a new project. Give your project a name and click **_create project_**:

![RevenueCat Setup](/images/revenue-cat-step-1.gif)

Once your project is created, we're interested in setting up an iOS app. Let's begin by clicking **_App Store_** and add:

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
