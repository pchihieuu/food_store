
class storage {

    static set(key, cartItems) {
        localStorage.setItem(key, JSON.stringify(cartItems))
    }

    static get(key) {
        return JSON.parse(localStorage.getItem(key))
    }
}

export default storage