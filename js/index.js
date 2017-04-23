import {
  updateBeacons,
  handleBeaconEnter,
  handleBeaconExit,
} from './bridge';

import {
  formatBeacons,
  substract,
} from './utils';

let monitoredBeacons = [];
let enterBeaconCallback;
let exitBeaconCallback;

handleBeaconEnter((data) => {
  const { uuid, major, minor } = data;
  if (enterBeaconCallback) {
    enterBeaconCallback(uuid, major, minor);
  }
});

handleBeaconExit((data) => {
  const { uuid, major, minor } = data;
  if (enterBeaconCallback) {
    exitBeaconCallback(uuid, major, minor);
  }
});

export function startMonitoring(beacons = []) {
  const formattedBeacons = formatBeacons(beacons);
  const newBeacons = substract(formattedBeacons, monitoredBeacons);
  monitoredBeacons = monitoredBeacons.concat(newBeacons);
  updateBeacons(monitoredBeacons, [], newBeacons);
}

export function stopMonitoring(beacons = []) {
  const formattedBeacons = formatBeacons(beacons);
  monitoredBeacons = substract(monitoredBeacons, formattedBeacons);
  updateBeacons(monitoredBeacons, formattedBeacons, []);
}

export function onEnterBeacon(fct) {
  enterBeaconCallback = fct;
}

export function onExitBeacon(fct) {
  exitBeaconCallback = fct;
}
