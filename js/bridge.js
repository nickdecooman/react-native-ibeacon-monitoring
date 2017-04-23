import { NativeModules, NativeEventEmitter } from 'react-native';

import {
  ENTER_BEACON,
  EXIT_BEACON,
  UPDATE_BEACONS,
} from './events';

const { RNIBeaconMonitoring } = NativeModules;
const eventEmitter = new NativeEventEmitter(RNIBeaconMonitoring);

export function handleBeaconEnter(fct) {
  eventEmitter.addListener(ENTER_BEACON, fct);
}

export function handleBeaconExit(fct) {
  eventEmitter.addListener(EXIT_BEACON, fct);
}

export function updateBeacons(allBeacons, oldBeacons, newBeacons) {
  RNIBeaconMonitoring.eventReceived(UPDATE_BEACONS, {
    allBeacons,
    oldBeacons,
    newBeacons,
  });
}
