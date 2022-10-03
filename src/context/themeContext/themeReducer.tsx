import { Theme } from "@react-navigation/native"

type ThemeAction = 
    | { type: 'set_light_theme' }
    | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark',
    dividerColor: string;
}

const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'rgba(0,0,0,0.7)',
    colors: {
        primary: 'red',
        background: 'blue',
        card: 'green',
        text: 'pink',
        border: 'orange',
        notification: 'real',
    }
}

export const themeReducer = ( state: ThemeState, action: ThemeAction): ThemeState => {
    
    switch ( action.type ){
        case 'set_light_theme':
            return { ...lightTheme }
        
        default:
            return state;
    }
}