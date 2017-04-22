# React Native iBeacon Monitoring

## Getting started

`$ npm install react-native-ibeacon-monitoring --save`

### Mostly automatic installation

`$ react-native link react-native-ibeacon-monitoring`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-ibeacon-monitoring` and add `RNIBeaconMonitoring.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNIBeaconMonitoring.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.nickdecooman.reactnative.ibeaconmonitoring.RNIBeaconMonitoringPackage;` to the imports at the top of the file
  - Add `new RNIBeaconMonitoringPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-ibeacon-monitoring'
  	project(':react-native-ibeacon-monitoring').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-ibeacon-monitoring/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-ibeacon-monitoring')
  	```


## Usage
```javascript
import RNIBeaconMonitoring from 'react-native-ibeacon-monitoring';

// TODO: What to do with the module?
RNIBeaconMonitoring;
```
