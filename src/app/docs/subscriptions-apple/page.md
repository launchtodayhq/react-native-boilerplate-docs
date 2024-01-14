---
title: Subscriptions on iOS
nextjs:
  metadata:
    title: Subscriptions on iOS
    description: Setting up RevenueCat with the React Native Boilerplate
---

Subscriptions are ongoing payments that users make to access premium
features, content, or services within an app. Typically, these subscriptions are billed on a regular basis, such as monthly or annually. This part of the guide will focus on the complete setup of subscriptions for iOS. We will take the example of LaunchToday™ that offers access to exclusive features on a monhtly plan and a discounted yearly plan.

## Getting started

Once you have added your app to App Store Connect, create a subscription by clicking the **_Subscriptions_** link in the bottom navigation. You will be
prompted to create a subscription group as shown below:

![Create Subscription in Apple](/images/apple-create-subs.gif)

After creating the subscription group, add a subscription item. This process is similar to creating in-app purchases - you need to set a
reference name and a product identifier:

![Apple Create Subscription](/images/revenue-cat-subs-create.gif)

Furthermore, set the availability, subscription price, localisation and review information (don't forget to attach an image that is
640 x 920 pixels for the screenshot).

Repeat the process for the annual subscription item as well. For reference, here is what the subscriptions should look like:

![Sentry Auth Tokens](/images/revenue-cat-subs-after.png)

## Import Subscriptions into RevenueCat

Head over to the RevenueCat dashbaord and import he newly created subscription. Ensure you've imported both the monthly and annual subscription
for the boilerplate example to work:

![Sentry Auth Tokens](/images/revenue-cat-import-subs.gif)

The imported subscriptions should look like this:

![Sentry Auth Tokens](/images/revenue-cat-imported-subs-view.png)

## Create entitlements for the products

For creating entitlements for the subscription products, the process is the same:

1. create an entitlement and provide an identifier and a description of the subscription
2. attach the product to the newly created subscription

We went through the same process [here](/inapp-purchases/Apple/setup-in-app-purchases-with-Apple#creating-entitlements-for-the-products) for
in-app purchases, however, here's a demo of how to do this for subscriptions:

![Sentry Auth Tokens](/images/revenue-cat-create-entitlement-for-sub.gif)

Once you have created the entitlements and attached the two subscription products, you should see the newly created entitlements like so:

![Sentry Auth Tokens](/images/revenue-cat-entitlements-with-subs.png)

## Creating offerings for the entitlements

Lastly, create an offering for your entitlements to enable your customers to purchase the subscription products:

![Sentry Auth Tokens](/images/revenue-cat-offering-subs.gif)

## Testing on physical devices

To test on your physical iPhone, follow these instructions:

1. Ensure you have the Expo Go app installed on your device
2. Once you've logged into your account, run `npx expo start --dev-client` to start the metro bundler
3. You will see a QR code - scan the code using your camera app and you'll be prompted to open the expo app
4. Test the in-app purchase by navigating to the RevenueCat screens:

Here's a short demo of a subscription purchase end to end:

![Sentry Auth Tokens](/images/revenue-cat-subs-demo.gif)
