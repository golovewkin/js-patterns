const playerFacade = {
    player: {

    },
    state: pause,

    toggle() {
        const state = this.state.toggle(this.player);

        if (state) {
            this.state = state
        }
    }
}

const playing = {
    toggle(player) {
        player.pause();
        return pause;
    }
}
const pause = {
    toggle(player) {
        player.play();
        return playing;
    }
}
const buffering = {
    player,
    toggle(player) {
        // player.play();
    }
}