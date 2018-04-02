package com.greektrails;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import com.greektrails.TrailTRacker;
import com.facebook.react.HeadlessJsTastService;

public final class ReTracker extends BroadcastReceiver{

    public final void onReceive(Context context,Intent intent){
        Intent reIntent = new Intent(context,TrailTracker.class);
        reIntent.putExtra('action','tzaaaaaaaaaaa')
        context.startService(reIntent)
        HeadlessJsTastService.acquireWakeLockNow(context);
    }
}