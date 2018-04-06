package com.greektrails;

import android.content.Intent;
import android.os.Bundle;
import com.facebook.react.HeadlessJsTaskService;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.jstasks.HeadlessJsTaskConfig;

public class MyTaskService extends HeadlessJsTaskService {
    @Override
    protected HeadlessJsTaskConfig getTaskConfig(Intent intent) {
        WritableMap data = extras != null ? Arguments.fromBundle(extras) : null;
        return new HeadlessJsTaskConfig(
                "Tracker", // Use the registered headless Task here
                data,
                5000);
    }
}
