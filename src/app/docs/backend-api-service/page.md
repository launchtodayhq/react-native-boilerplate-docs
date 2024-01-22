---
title: Backend API Service for the React Native Boilerplate
nextjs:
  metadata:
    title: Backend API Service
    description: Backend API Service for the React Native Boilerplate
---

![Backend API Service](/images/api-service.png)

## Introduction

The backend API functions as an intermediary, facilitating interactions between the
mobile app and third-party services. Presently, its primary function is to manage
payment initiation through Stripe and issue push notifications with Firebase and Apple Push Notification Server. Plans for expanding the service include features
like email triggers, REST API's and more.

## Getting Started

To get started, clone the **launchtodayhq/react-native-boilerplate-backend** repository by running the following command:

```js
git clone git@github.com:launchtodayhq/react-native-boilerplate-backend.git [YOUR_APP_NAME]
```

Alternatively, you can download the source code directly from the latest release:

- [Source code (zip)](https://github.com/launchtodayhq/react-native-boilerplate-backend/archive/refs/tags/launchtoday-v1.zip)
- [Source code (tar.gz)](https://github.com/launchtodayhq/react-native-boilerplate-backend/archive/refs/tags/launchtoday-v1.tar.gz)

Once complete, run the following commands:

```js
cd [YOUR_APP_NAME]
yarn
cp .env.example.env.env
```

## Launching the service

You should be able to run the service by running:

```js
yarn start
```

You can test to see if the service is running correctly by making a **GET** request to **http://localhost:8080/hello** - you should
see the following response:

```js
'Hello, this endpoint works! 🎉'
```

## API Functionality

In **src/routes/stripe.ts**, the **/createPaymentIntent** endpoint is designed to:

- create a Stripe Customer object to track users in payment transactions
- generate a PaymentIntent object using the created Customer ID, which represents an individual payment and handles
  the payment details.

In **src/routes/notifications/notifications.ts**, the **/notifications** endpoint is designed to send a push notification to a device given the device type (iOS or Android) and the device token. For iOS devices, Apple Push Notification Service is used; for Android, Firebase is configured.

## Middleware use

Middleware logic is introduced in **src/authMiddleware.ts** to ensure that all payment transactions are initiated by verified users. It checks for a valid
token and if authentication fails, the request is terminated with a 401 status code. The middleware is crucial for maintaining
the integrity of the payment process by preventing unauthorized access and ensuring that each payment is linked to a verified
user account in Supabase.

## Documentation

You can read the [Stripe documentation](https://stripe.com/docs/api/payment_intents) on Payment Intents for more information.

## Update environment variables in the service

Once you have successfully setup and launched the backed service, make sure you update the **EXPO_PUBLIC_BACKEND_SERVICE_URL** environment
variable in the boilerplate app to the URL the service is running on (the default url is **http://localhost:8080**). Make sure you
restart the expo application whenever you update the **.env** file to ensure expo picks up the newly created environment variable.

{% quick-links %}

{% quick-link title="Troubleshooting" icon="installation" href="/docs/installation" description="Checkout this guide for troubleshooting steps. Still stuck? Feel free to post in the Discord channel for help." /%}

{% /quick-links %}
