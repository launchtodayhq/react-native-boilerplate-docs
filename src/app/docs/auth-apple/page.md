---
title: Sign in with Apple
nextjs:
  metadata:
    title: Sign in with Apple
    description: Setting up Sign in with Apple with the React Native Boilerplate.
---

Note:

- The following part of this documentation was built on [this tutorial](https://www.youtube.com/watch?v=-tpcZzTdvN0) - you can watch this
  for more detail on how the integration with Apple was built.
- Sign in with Apple is only available on the iOS OS

## Introduction

Signing in with Apple is achieved using the **<SignInWithApple />** component in **components/auth/apple/index.tsx**.

The core logic of this feature begins with calling **AppleAuthentication.signInAsync()** from the **expo-apple-authentication** library. This
API handles opening the native experience for logging in with your Apple account (to clarify, this does not use the browser).

Upon a successful login, **AppleAuthentication.signInAsync()** returns an object that as property named **identityToken** which is a JSON Web
Token (JWT) that securely communicates information about the user to your app. Using this token, we call the Supabase API to sign in the
user using **supabase.auth.signInWithIdToken()** (this returns an access token which can be used to authenticate with your APIs).

## Enabling Sign in with Apple for your project

The first step to enabling signing in with Apple is to enable the Apple Auth Provider in Supabase (the link to this page should be
https://supabase.com/dashboard/project/PROJECT-ID/auth/providers):

![Supabase Apple Auth Setup](/images/supabase-apple-setup.png)

A few things to note:

1.  Ignore the Serivce ID (for OAuth) and Service Key (for OAuth) - these are not required to set for Apple authentication
2.  The Auhorized Client ID's needs to contain a list of allowed Apple app bundle ID's:
    - the first ID should be set to **host.exp.Exponent** - this ensures that the iOS OS navigates back to your
      Expo application after authentication is successful. You can read more on this
      [here](https://supabase.com/docs/guides/auth/social-login/auth-apple?platform=react-native#expo-configuration-native-app).
    - the second ID should be the **bundleIdentifier** in your **app.json** - it's currently set to **com.paulmbw.reactnativestarterpack**,
      but you are free to change it (ensure you rebuild the project after changing this)

Once you've updated the Authorized Client IDs, click **Save** and that completes the setup for authentication via sign in with
Apple.

## Demo

Once you have made the above changes, you should be able to run the app and sign in with Apple as shown in the demo [here](https://www.veed.io/embed/216a3cb2-8c83-4430-94a4-dab5872468fe).
