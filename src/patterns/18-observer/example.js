const store = {
    subscribers: new Map(),

    subscribe(callback) {
        this.subscribers.set(callback, callback);

        return () => this.subscribers.delete(callback);
    },

    notify() {
        this.subscribers.forEach(callback => callback());
    }
}

const unsubscribe = store.subscribe('1', () => console.log('storeChanged'));
store.subscribe('2', () => console.log('storeChanged'));
store.subscribe('3', () => console.log('storeChanged'));
store.subscribe('4', () => console.log('storeChanged'));
store.subscribe('5', () => console.log('storeChanged'));