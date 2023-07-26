export interface AuthState {
    status: 'ckecking' | 'authenticated' | 'not-authenticated',
    user?: any,
    token?: string | null
}


type AuthActionType = 
    | { type: 'Login', payload: { token: string, user: any } }
    | { type: 'Logout' }

export const authReducer = ( state: AuthState, action: AuthActionType ): AuthState => {

    switch( action.type ){
        case 'Login':
            return {
                ...state,
                status: 'authenticated',
                user: action.payload.user,
                token: action.payload.token
            }

        case 'Logout':
            return {
                ...state,
                status: 'not-authenticated',
                user: null,
                token: null
            }

        default: 
            return state
    }
}