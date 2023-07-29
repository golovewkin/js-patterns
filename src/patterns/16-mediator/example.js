const store = {
    dispatch(type, payload) {

    }
}


function Card() {

    return <div>
        <button onClick={() => store.dispatch('buy', '123123')}></button>
    </div>
}

function Cart() {

    return <div>
        <ul>
            <li>pizza <button onClick={() => store.dispatch('remove', '123123')}></button></li>
        </ul>
    </div>
}

function Modal() {

    return <div>
    <li>pizza <button onClick={() => store.dispatch('replace', '123123')}></button></li>
    </div>
}