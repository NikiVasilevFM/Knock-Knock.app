const initialState = {
    messages: [],
    isAuth: false,
    login: null,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'USER/REGISTRATION': {
            return {
                ...state,
                isAuth: true,
                login: action.login
            }
        }

        case 'USER/LOGIN': {
            return {
                ...state,
                isAuth: true,
                login: action.login
            }
        }

        case 'MESSAGES/ADD': {
            return {
                ...state,
                messages: [...state.messages, action.message],
            }
        }
        default: {
            return state;
        }
    }
}