# React Native + Cerebral

*Android's only implementation because I do not have a Mac. If you have a Mac please make a PR*

#### Requirements

1. Node.js: https://nodejs.org/en/
1. Yarn: https://yarnpkg.com/
1. React Native: https://facebook.github.io/react-native/docs/getting-started.html
1. Cerebral Standalone Debugger: https://cerebral.github.io/install/02_debugger.html

#### Prepare

```sh
yarn
```

#### Start

- connects an android's phone or an android's emulator (genymotion is recommended)

```sh
./CerebralDebugger

# Android
react-native run-android
adb reverse tcp:8081 tcp:8081 && npm start -- --reset-cache --verbose

# IOS
react-native run-ios
```
