
export function onClear() {
    return {
        type: 'ON_CLEAR'
    }
}

export function onNumberPress(num) {
    return {
        type: 'ON_PRESS',
        payload: num
    }
}

export function onSubmit() {
    return {
        type: 'ON_SUBMIT'
    }
}