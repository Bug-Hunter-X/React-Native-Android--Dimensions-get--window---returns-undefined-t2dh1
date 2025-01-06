# React Native Android Dimensions.get('window') returns undefined

This repository demonstrates a common issue in React Native Android development where `Dimensions.get('window')` returns `undefined` during the initial render. This can cause unexpected behavior or app crashes.

The `DimensionsBug.js` file shows the problematic code, while `DimensionsSolution.js` provides a solution using the `useEffect` hook and `Dimensions.addEventListener` to ensure you have accurate dimensions.

## Problem

The `Dimensions` API is asynchronous. If you call `Dimensions.get('window')` too early, before the layout is fully calculated, you'll receive `undefined`.  This is especially problematic when initializing components that rely on the screen dimensions.

## Solution

The solution involves using the `useEffect` hook to listen for changes in screen dimensions.  The `addEventListener` ensures that you get the correct dimensions after the layout has been computed.  This prevents crashes and guarantees that your application uses the correct values.