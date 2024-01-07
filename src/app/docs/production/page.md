---
title: Getting your app ready for production
nextjs:
  metadata:
    title: Getting your app ready for production
    description: Quidem magni aut exercitationem maxime rerum eos.
---

This guide details the steps required before publishing your app to the Apple and Google stores. This guide grow in detail overtime and
will include more information in future updates.

## Update iOS bundle identifier and Android package

In your **app.json**, the iOS **bundleIdentifier** and the Android **package** is currently set to **com.launchtodayhq.reactnativeboilerplate**
(and if you purchsed the upgraded boilerplate, it's **com.launchtodayhq.reactnativeboilerplateupgraded**).

These values need to be updated to match your app. The format for these values is **com.<COMPANY_NAME>.<APP_NAME>**. Once you've updated
the **app.json** with the new identifiers, following these instructions:

### For iOS

1. delete the **ios**
2. run **expo run:ios** - this will recreate the **ios** directory. You will be prompted to confirm the bundle identifier for the app
3. you also need to enable the Sign in with Apple capability in Xcode (follow the instructions [here](https://developer.apple.com/documentation/xcode/adding-capabilities-to-your-app#Add-a-capability))
4. finally, update the Redirect URL's in the URL configuration section of your Supabase account.
5. for Android, run **expo run:android** - this will recreate the **android** directory. Again, you will be prompted to confirm the bundle identifier for the app
6. for Android, you need to re-upload the **SHA** certificate since it was deleted in step 1. Follow the instructions [here](/authentication/google#oauth-20-client-ids) (the set the SHA-1 signing certificate fingerprint part)

### For Android

1. delete the **android** directory
2. for Android, run **expo run:android** - this will recreate the **android** directory. Again, you will be prompted to confirm the bundle identifier for the app
3. for Android, you need to re-upload the **SHA** certificate since it was deleted in step 1. Follow the instructions [here](/authentication/google#oauth-20-client-ids) (the set the SHA-1 signing certificate fingerprint part)

Once complete, you should see the following file changes:

## Supabase Site URL

In the URL configuration section of your Supabase app, you need to update the Site URL. During development you will have set this value
as your IP address and port, however, the value for production should use the bundle indentifier for iOS or the package name for Android. It
will resemble the following:

```js
com.domain.appname
```

You need to update the Site URL by replacing the IP address and port with the bundle identifier or package name of your app. This is an
example of the change you would make:

| Before                | After                      |
| --------------------- | -------------------------- |
| **exp://192.168.0.0** | **com.mycompany.myapp://** |

## Deploy the backend API service

You will need to find an appropriate method for deploying the backend service on production. Here are a few example services you can use:

1. [Flightcontrol](https://www.flightcontrol.dev/) - recommended
2. [DigitalOcean](https://www.digitalocean.com/)
3. [Render](https://render.com/)
4. [AWS](https://aws.amazon.com/)
