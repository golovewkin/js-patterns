function withAuthorization(Component) {
    return function () {
        if(isAuthorized) {
            return <Component/>
        }

        return null;
    }
}

const ButtonWithAuthorization = withAuthorization()


const player = {
    play(){

    }
}

const playerWithAd = {
    player,
    playAd() {

    },

    play() {
        this.playAd();
        this.player.play()
    }
}

playerWithAd.player = player;

