const player = {
    tracker,
    setTracker(tracker) {
        this.tracker = tracker;
    },

    track() {
        tracker.sendLog();
    }
}

const tracker = {
    track() {

    }
}

const tracker2 = {
    sendTrack() {
        
    }
}

const trackerAdapter = {
    tracker,
    sendLog() {
        this.tracker.track()
    }
}
const tracker2Adapter = {
    tracker,
    sendLog() {
        this.tracker.sendTrack()
    }
}
trackerAdapter.tracker = tracker;
tracker2Adapter.tracker = tracker2;

player.setTracker(trackerAdapter)
player.setTracker(tracker2Adapter)