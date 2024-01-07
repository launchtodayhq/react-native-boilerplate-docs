---
title: Troubleshooting
nextjs:
  metadata:
    title: Troubleshooting
    description: Quidem magni aut exercitationem maxime rerum eos.
---

While running the boilerplate app, you may encounter certain issues that can impact your experience.
This section of the documentation is designed to assist you with resolving these issues efficiently. If
you encounter any problems not covered here, please do post them in the Discord channel for prompt
support.

## Unmatched Route: Page could not be found

After setting up the boilerplate app (and ensruing you have created the **.env** file), you may see the following error:

![Unmatched Route Error](/images/unmatched-route-error.png)

This is a result of not adding the correct values in the environment variables. Please complete the setup of all the integrations
and update the **.env** file accordingly and you should be able to navigate between the screens.

## Invalid Sentry Dsn: sentry.dsn Error

If, after integrating [Supabase](/supabase-setup) and running the app on iOS or Android, you come across the error shown below:

![Sentry DSN Error](/images/sentry-error.png)

Please be advised it is safe to dismiss the error if you have not completed the [Sentry setup](/monitoring) process.

For those who have not configured Sentry, this error should not affect the functionality of your application. It appears
because the app is attempting to link to a Sentry Data Source Name (DSN), which has not been provided. If you do not
require error logging and monitoring via Sentry, no action is necessary.

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
