---
title: Signin in with Magic Links
nextjs:
  metadata:
    title: Signin in with Magic Links
    description: Setting up Sign in with Magic Links with the React Native Boilerplate.
---

Signing in via a magic link is achieved using the **<MagicLink />** component in **app/components/Auth/MagicLink/index.tsx**. Using an email input
field, a user will enter their email address - this will then initiate a call to Supabase using **supabase.auth.signInWithOtp()** which sends
an email to the user with a link. This link will then redirect the user back to the app, and internally an access token is returned which
can be used to call your APIs securely.

There is no additional setup required - as default, the Email Auth provider is already enabled, however, you are able to change the default settings
such as increasing/decreasing the duration before the magic link expires, and setting the password length.

![Supbase Email](/images/email-supabase.png)

## Demo

You can find a demo of signin in with magic links [here](https://www.veed.io/embed/245786b1-36dc-4761-b40c-a4e9f6e563d8).
