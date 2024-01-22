---
title: Supabase
nextjs:
  metadata:
    title: Supabase
    description: Setting up Supabase with the React Native Boilerplate
---

## Introduction
[Supabase](https://supabase.com/) is an open source Firebase alternative for building backed applications. You'd typically use Supabase to provision and manage databases, authentication and file storage.

The boilerplate app interacts with Supabase for persisting and manipulating data using the **supabase** object returned from
**createClient** in **src/services/supabase/index.ts**:

```js
export const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_PROJECT_URL,
  process.env.EXPO_PUBLIC_SUPABASE_API_KEY,
  {
    auth: {
      ...
    },
  },
)
```

There are two example use cases included:

1. updating rows in a Postgres database, specifically a table named **profiles** and the fields are updated from the app
2. storing images in a Storage bucket, specifically storing images uploaded from the app

## Getting started

This project incorporates the User Management Starter from the Quickstarts in Supabase, a collection of pre-configured SQL queries designed for quick deployment. These queries facilitate the quick creation of tables and columns. Specifically, they are used here to establish a Postgres database with a table named **profiles** with the follwing columns:

```js
create table profiles (
  id uuid references auth.users on delete cascade not null primary key,
  updated_at timestamp with time zone,
  username text unique,
  full_name text,
  avatar_url text,
  website text,

  constraint username_length check (char_length(username) >= 3)
);
```

The link to the quickstarts should be as follows: **https://supabase.com/dashboard/project/PROJECT-ID/sql/quickstarts**.

You can select whichever starter suits you best (or you can write your own queries), but for the purpose of this documentation
we will stick to the **User Management Starter**. Click **Run** to perform the query as shown below:

![Supabase User Management](/images/supabase-user-management-starter.png)

This quickstarter also creates a Storage bucket and defines access policies using the following queries:

```js
-- Set up Storage!
insert into storage.buckets (id, name)
  values ('avatars', 'avatars');

-- Set up access controls for storage.
-- See https://supabase.com/docs/guides/storage#policy-examples for more details.
create policy "Avatar images are publicly accessible." on storage.objects
  for select using (bucket_id = 'avatars');

create policy "Anyone can upload an avatar." on storage.objects
  for insert with check (bucket_id = 'avatars');
```

As a result, you will see both a new table named **profiles** and a bucket named **avatars**.

![Profile Table](/images/profiles-table.png)

![Storage Bucket](/images/storage-bucket.png)

## How does the app communicate with the database and the storage bucket?

The procedures for adding and modifying data within the Postgres database and associated storage bucket are outlined in the file **profile.tsx**. This particular screen displays a straightforward profile page, complete with fields corresponding to database columns and a section for a profile photo, which is saved in the storage bucket.

### fetchProfile()

When **Profile** screen first renders, a call to fetch a row from the **profiles** table based on the session ID is performed. Fetching data
from tables resembles writing a SQL query where you define the **from** table, the columns you require using **select** and
specifying rows using **eq** (which takes the column name, and the value):

```js
await supabase
  .from(SUPABASE_PROFILES_TABLE_NAME)
  .select(`username, full_name, website, avatar_url`)
  .eq('id', session?.user.id)
  .single()
```

### updateProfile()

Updating a row in the table follows a similar structure - you define the **from** table and you pass an object to **upsert** where the
object key is the column name, and object value is the value to be updated. **upsert** performs an update if the row exists, or inserts
a new row if it does not exist.

```js
const updates = {
  id: session?.user.id,
  username,
  full_name,
  website,
  updated_at: new Date(),
}

const { error } = await supabase
  .from(SUPABASE_PROFILES_TABLE_NAME)
  .upsert(updates)
```

You can read more about the database methods available on the Supabase documentation for the **@supabase/supabase-js** library [here](https://supabase.com/docs/reference/javascript/initializinghere).

## Recommendation

This boilerplate includes basic examples of how to interact with your Supabase database. For a swift setup, it is advisable to begin with the User Management Quickstart to grasp the underlying principles of the operations. Those with more experience in app development and database management are encouraged to modify the existing logic or even create new tables and columns to suit their needs. Just make sure to configure the appropriate environment variables before proceeding.

## Demo

Once you've created the correct table and storage bucket in Supabase, you should be able to persist and manipulate data from the app as
shown in the demo [here](https://www.veed.io/embed/3f9d02e3-466f-48c5-96bd-f029d46fb6b8).

{% quick-links %}

{% quick-link title="Troubleshooting" icon="installation" href="/docs/installation" description="Checkout this guide for troubleshooting steps. Still stuck? Feel free to post in the Discord channel for help." /%}

{% /quick-links %}
