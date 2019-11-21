package com.krunal3kapadiya.nativeandroid;

import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by Krunal Kapadiya on 27-03-2018.
 */

public class NativeAppModule extends ReactContextBaseJavaModule {
    private static final String TAG = NativeAppModule.class.getSimpleName();

    public NativeAppModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void openToast(String message){
        Toast.makeText(getCurrentActivity(), message,Toast.LENGTH_LONG).show();
    }

    @Override
    public String getName() {
        return "NativeAppModule";
    }
}
