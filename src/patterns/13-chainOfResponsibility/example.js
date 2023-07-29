// action -> m -> m -> m -> reducer


function m(next, action) {
    if (validate(action)) {
        next()
    }
}


const AuthorizationFilter = {
    next,
    setNext(next) {
        this.next = next
    },

    handle() {
        //logic
        if (success) {
            this.next.handle();
        }
    }
}
const RoleFilter = {
    next,
    setNext(next) {
        this.next = next
    },

    handle() {
        //logic
        if (success) {
            this.next.handle();
        }
    }
}
const LocationFilter = {
    next,
    setNext(next) {
        this.next = next
    },

    handle() {
        //logic
        if (success) {
            this.next.handle();
        }
    }
}

AuthorizationFilter.setNext(RoleFilter)
RoleFilter.setNext(LocationFilter);

AuthorizationFilter.handle(request);