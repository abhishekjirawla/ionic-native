import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
@Plugin({
  pluginName: 'IonicNativeConnection',
  plugin: 'cordova-plugin-ionic-native-connection',
  pluginRef: 'IonicNativeConnection',
  repo:
    'https://gitlab.com/abhishekjirawla/cordova-plugin-ionic-native-connection.git',
  platforms: ['iOS']
})
@Injectable()
export class IonicNativeConnection extends IonicNativePlugin {
 /**
  * Your plugin plugin functions go here. 
  * Function names should match the ones in your .swift & .js files.
  * Otherwise you won't be able to execute them.
  */
@Cordova({
  successIndex: 0,
  errorIndex: 1
})
nativeGeofence(): Promise<any> {
  return;
  }
}