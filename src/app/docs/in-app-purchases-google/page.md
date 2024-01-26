---
title: In-app Purchases on Android
nextjs:
  metadata:
    title: In-app Purchases on Android
    description: Setting up RevenueCat with the React Native Boilerplate
---

{% callout type="warning" title="Guide is currently WIP" %}
The documentation for in-app purchases with RevenueCat for Android is currently under development. In the meantime, the feature is available for use. If you encounter any problems, do post in the Discord channel where you will recieve support.
{% /callout %}

In-app purchases (otherwise known as in-app products) are one-off items that your customers can purchase. They are created in Google Play Store and made availabile in your app with RevenueCat. This part of the guide will focus on the complete setup of in-app purchases for Android. We will take the example of a wizard-style app where you can purchase individual consumable and non-consumable items for your wizard. There are three items availabile that are displayed on a paywall:

1. Magical Staff (consumable)
2. Crystal Ball (consumable)
3. Spell Book (non-consumable)

{% callout title="What are consumable and non-consumable items?" %}
Consumable items are items that can be purchased more than once - non-consumables items can only be purchased once.
{% /callout %}

All the code - including the screens to navigate to this example and the RevenueCat integration - are all included in the boilerplate. This guide focuses on setting up the necessary products for RevenueCat to feed into the app via a paywall.

## Create in-app products in Google Play Store

Once you have created your app in Google Play Store, create an in-app purchase. We are going to create the three items that are displayed on the paywall. Set the **Type**, **Reference Name** and **Product ID** as follows:

| Product ID         | Name          | Description                     | Price | Multi-quantity |
| ------------------ | ------------- | ------------------------------- | ----- | -------------- |
| magical_staff_3_99 | Magical Staff | Increase Attack Strength by 30% | 2.99  | Yes            |
| crystal_ball_2_99  | Crystal Ball  | Enhances Magical Power by 20%   | 3.99  | Yes            |
| spell_book_5_99    | Spell Book    | Increases Spell Damage by 50%   | 5.99  | No             |

Let's add the Magical Staff item. Firstly, click the **In-app products** link in the navigation section and add the first item, setting the Product ID, Name, Description, Price and set the Mult-quantity from the table above:

![Google In-app Products](/images/in-app-products.gif)

As a result, you should have a list of in-app products as shown below:

![Google In-app Products](/images/in-app-products.png)
