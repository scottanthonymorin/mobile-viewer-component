# Mobile Viewer Component

Need to present your react-based mobile web app in a desktop browser... Here is a React component that you can use to wrap your app. _This does not replace browser dev tools._

## Setup

### Install

```
npm install mobile-viewer-component
```

or

```
yarn add mobile-viewer-component
```

### Import

```
import MobileWrapper from "mobile-viewer-component/dist";
```

### Implement

- Wrap it around your `App` component, or the top level component that has content. No need to wrap any context providers, etc.

```jsx
<MobileWrapper background='weave'>
  <App />
</MobileWrapper>
```

## Desktop Backgrounds

There are a few preset CSS backgrounds that you can use. _They were implemented with CSS from https://leaverou.github.io/css3patterns/._

To set the background provide a value to the `background` prop in `MobileWrapper`

### Options

- `microbial-mat`
- `weave`
- `cross-dots`
- `wave`

## Upcoming Features

...coming soon... 😉
