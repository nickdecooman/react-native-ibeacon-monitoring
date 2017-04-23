function generateBeaconId(UUID, major, minor) {
  return `${UUID}-${major}-${minor}`;
}

// A - B
// Elements that are in A but not in B
export function substract(collectionA, collectionB) {
  const result = {};
  const entries = Object.entries(collectionA);
  for (let i = 0; i < entries.length; i += 1) {
    const [key, value] = entries[i];
    if (!collectionB[key]) {
      result[key] = value;
    }
  }
  return result;
}

export function formatBeacons(beaconArray) {
  const result = {};
  for (let i = 0; i < beaconArray.length; i += 1) {
    const beacon = beaconArray[i];
    const key = generateBeaconId(beacon.uuid, beacon.major, beacon.minor);
    result[key] = beacon;
  }
  return result;
}
