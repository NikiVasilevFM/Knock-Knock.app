export const register = (login) => ({
    type: 'USER/REGISTRATION',
    login,
})

export const login = (login) => ({
    type: 'USER/REGISTRATION',
    login,
})

export const addMessage = (message) => ({
    type: 'MESSAGES/ADD',
    message,
})