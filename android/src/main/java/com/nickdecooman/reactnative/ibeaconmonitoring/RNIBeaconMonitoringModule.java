
package com.nickdecooman.reactnative.ibeaconmonitoring;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class RNIBeaconMonitoringModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNIBeaconMonitoringModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNIBeaconMonitoring";
  }
}