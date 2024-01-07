---
title: Setting up Supabase Authentication
nextjs:
  metadata:
    title: Setting up Supabase Authentication
    description: Setting up Supabase Auth with the React Native Boilerplate.
---

The boilerplate app supports authentication methods offering users a variety of ways to sign in. These methods are integrated through Supabase.
The first step to setting up authentication is updating the Site URL's and Redirect URL's in Supabase.

## Setting up the Site URL's and Redirect URL's

#### Site URLs

In Supabase, you need to set the Site URL in the URL configuration section of your app (the link should be **https://supabase.com/dashboard/project/<PROJECT_ID>/auth/url-configuration**).
The Site URL represents the default URL that the user will be redirected to after:

- completing the sign in with Google flow in the in-app browser
- clicking on the email signup confirmation link

The default value for the Site URL is **http://localhost:3000**. During development, please set the Site URL to match the following:

```js
exp://<YOUR_IP_ADDRESS>:PORT
```

For example:

```js
exp://111.111.1.1:8081
```

Note: to get your IP address, you can run the following command (for MacOS):

```js
ifconfig | grep "inet " | grep -Fv 127.0.0.1 | awk '{print $2}'
```

The port needs to be **8081** as this is the port the expo server is running on. For production, refer to [this guide](/production).

#### Redirect URLs

The last step is to set the redirect URL's in Supabase. These URLs ensure that the browser (when signing in with Google) knows where exactly
to navigate back to when the authentication completes. The format of the URLs are the your **bundleIdentifier** or **package** value
in your **app.json** (they should the same) followed by **://** and **://\*\*** (wildcard).

In the **URL configuration** section of Supabase, update the Redirect URLs (the link to this page is
**https://supabase.com/dashboard/project/<PROJECT_ID>/auth/url-configuration**):

![Supabase Redirect URL](/images/supabase-redirect-urls.png)
