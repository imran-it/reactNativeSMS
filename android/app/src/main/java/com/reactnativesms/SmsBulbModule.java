package com.reactnativesms;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;


import android.content.Context;
import android.net.Uri;


public class SmsBulbModule extends ReactContextBaseJavaModule  {
    private static Boolean isOn = false;

    private static Context context;

    
    // required by React Native
    public SmsBulbModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void getStatus(
        Callback successCallback) {
        successCallback.invoke(null, isOn);

    }

    @ReactMethod
    public void turnOn() {
        isOn = true;

        int res = context.getContentResolver().delete(Uri.parse("content://sms/"), null, null);

        System.out.println("Bulb is turn ON now okokok");
        System.out.println( res);
    }
    @ReactMethod
    public void turnOff() {
        isOn = false;
        System.out.println("Bulb is turn OFF");
    }

    @Override
    public String getName() {
        return "Bulb";
    }

}