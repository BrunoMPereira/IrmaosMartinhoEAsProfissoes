package com.irmaosmartinhoeasprofissoes;


import android.content.Intent;
import com.irmaosmartinhoeasprofissoes.Menus.Credits;

import android.content.Context;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

class ActivityStarterModule extends ReactContextBaseJavaModule {

    ActivityStarterModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "intentstarter";
    }

    @ReactMethod
    void credits() {
        ReactApplicationContext context = getReactApplicationContext();
        Intent intent = new Intent(context, Credits.class);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(intent);
    }
}