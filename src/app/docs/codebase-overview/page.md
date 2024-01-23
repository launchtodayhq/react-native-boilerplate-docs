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

- At the root level, the structure is punctuated with critical configuration files. **app.json** and **eas.json** are used for configuring the Expo framework. The **.env** file manages key environment variables, ensuring secure and flexible configuration management, while **google-services.json** is key for integrating Firebase, providing a suite of backend services that enhance the app's functionality.

![Project Structure](/images/project-structure.jpg)

## Dependencies

Here is a snapshot of the current dependencies of the project:

| Library                                     | Current Version |
|---------------------------------------------|-----------------|
| `@aptabase/react-native`                    | `^0.3.9`        |
| `@expo/vector-icons`                        | `^14.0.0`       |
| `@react-native-async-storage/async-storage` | `1.21.0`        |
| `@react-navigation/drawer`                  | `^6.6.6`        |
| `@react-navigation/native`                  | `^6.1.9`        |
| `@sentry/react-native`                      | `5.16.0`        |
| `@stripe/stripe-react-native`               | `0.35.1`        |
| `@supabase/supabase-js`                     | `^2.39.3`       |
| `aes-js`                                    | `^3.1.2`        |
| `expo`                                      | `~50.0.3`       |
| `expo-apple-authentication`                 | `~6.3.0`        |
| `expo-application`                          | `~5.8.3`        |
| `expo-auth-session`                         | `~5.4.0`        |
| `expo-constants`                            | `~15.4.5`       |
| `expo-dev-client`                           | `~3.3.6`        |
| `expo-device`                               | `~5.9.3`        |
| `expo-font`                                 | `~11.10.2`      |
| `expo-image-picker`                         | `~14.7.1`       |
| `expo-in-app-purchases`                     | `~14.5.0`       |
| `expo-linking`                              | `~6.2.2`        |
| `expo-localization`                         | `~14.8.3`       |
| `expo-notifications`                        | `~0.27.4`       |
| `expo-router`                               | `~3.4.5`        |
| `expo-secure-store`                         | `~12.8.1`       |
| `expo-splash-screen`                        | `~0.26.3`       |
| `expo-status-bar`                           | `~1.11.1`       |
| `expo-system-ui`                            | `~2.9.3`        |
| `expo-updates`                              | `~0.24.8`       |
| `expo-web-browser`                          | `~12.8.1`       |
| `react`                                     | `18.2.0`        |
| `react-dom`                                 | `18.2.0`        |
| `react-native`                              | `0.73.2`        |
| `react-native-gesture-handler`              | `~2.14.0`       |
| `react-native-get-random-values`            | `~1.8.0`        |
| `react-native-purchases`                    | `^7.16.0`       |
| `react-native-reanimated`                   | `~3.6.1`        |
| `react-native-safe-area-context`            | `4.8.2`         |
| `react-native-screens`                      | `~3.29.0`       |
| `react-native-svg`                          | `14.1.0`        |
| `react-native-url-polyfill`                 | `^2.0.0`        |
| `react-native-web`                          | `~0.19.10`      |


---

Now that we've covered the codebase and it's dependencies, let's shift our focus to setting up the React Native boilerplate app.
