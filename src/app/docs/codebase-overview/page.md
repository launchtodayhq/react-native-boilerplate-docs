---
title: Codebase Overview
nextjs:
  metadata:
    title: Codebase Overview
    description: Quidem magni aut exercitationem maxime rerum eos.
---

## Project Structure

The codebase is split into distinct directories each serving a clear purpose:

- The **app** directory is the epicenter of the user interface containing all the screens and UI components for functionalities such as user authentication and notifications. The app uses Expo's file-based routing for
  navigating between screens. The **assets** folder is the repository for all visual and typographic elements, including fonts, icons, and images

- Within the **components** directory, you will find reusable elements like buttons and higher-order components (HOCs), which are the building blocks for creating a consistent and dynamic user experience. The **src** directory is dedicated to the business logic of the application. It manages communication with external services like Supabase and RevenueCat through custom hooks

- At the root level, the structure is punctuated with critical configuration files. **app.json** and **eas.json** are used for configuring the Expo framework. The **.env**file manages key environment variables, ensuring secure and flexible configuration management, whil e**google-services.json** is key for integrating Firebase, providing a suite of backend services that enhance the app's functionality.

![Project Structure](/images/project-structure.jpg)

## Dependencies

Here is a snapshot of the current dependencies of the project

![Dependencies](/images/dependencies.jpg)

---

Now that we've covered the codebase and it's dependencies, let's shift our focus to setting up the React Native boilerplate app.
