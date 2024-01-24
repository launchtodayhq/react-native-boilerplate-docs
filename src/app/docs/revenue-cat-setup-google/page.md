---
title: Setting up RevenueCat with Google Play Store
nextjs:
  metadata:
    title: Setting up RevenueCat with Google Play Store
    description: Setting up RevenueCat with Google Play Store
---

{% callout type="warning" title="Guide is currently WIP" %}
The documentation for setting up RevenueCat with Google Play Store is currently under development. In the meantime, the feature is available for use. If you encounter any problems, do post in the Discord channel where you will recieve support.
{% /callout %}

[RevenueCat](https://www.revenuecat.com/) is a mobile SDK and API for managing in-app subscriptions. RevenueCat communicates with the App Store and Google Play Store and removes the complexity of taking payments in your app.

This part of the documentation will focus on setting up RevenueCat with the Google Play Store to implement in-app purchases and subscriptions for iOS. The App Store Connect (iOS) counterpart is documented [here](/docs/revenue-cat-setup-ios).

## Prerequisites

- ensure you have created an account with [Google Play Store](https://play.google.com/console/about/?utm_source=google&utm_medium=cpc&utm_campaign=Console2020-Branded&utm_term=google%20play%20console%7ce&utm_content=676107993487&gad_source=1&gclid=EAIaIQobChMI89Ggqo35ggMVqQQGAB0afg7cEAAYASAAEgIGj_D_BwE) - you will be unable to progress onto the next steps without
  both accounts (we will need API keys for setting up your RevenueCat account)
- in-app purchases are [not availabile](https://docs.expo.dev/versions/latest/sdk/in-app-purchases/) on the Android emulator. **You need
  a physical device to test in-app purchases and subscriptions**

## Create RevenueCat account and project

Head over to [RevenueCat](https://www.revenuecat.com/) and create your account. Once complete, you should be able to create
a new project. Give your project a name and click **_create project_**:

![RevenueCat Setup](/images/revenue-cat-step-1.gif)

Once your project is created, we're interested in setting up an Android app. Let's begin by clicking **_Play Store_** and add:

1. an app name (this is the name of your app that will be published)
2. the Google Play package (you can find this in the **app.json** under **bundleIdentifier** of the boilerplate)
3. the Service Account Credentials JSON (follow the instructions carefully [here](https://www.revenuecat.com/docs/creating-play-service-credentials))

![RevenueCat Setup](/images/revenue-cat-android-setup.gif)

The next steps will cover creating in-app purchases and subscriptions in Google Play Store.
