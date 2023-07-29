const facade = {
    player,
    tracker,
    logger,
    adPlanner,

    play() {
        this.adPlanner.playAd();
        this.tracker.sendTrack();
        this.player.play();
    },

    upVolume() {
       if(this.player.isMute()) {
        this.player.unmute();
       }

       this.player.setVolume(this.player.currentVolume + 1)
    },

    downVolume() {

    }
}

facade.play();
facade.upVolume();


