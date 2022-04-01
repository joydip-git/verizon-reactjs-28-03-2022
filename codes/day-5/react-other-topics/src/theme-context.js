import { createContext } from "react";

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

const ThemedContext = createContext({
    theme: themes.dark
})
export const OtherContext = createContext({
    theme: themes.dark,
    // toggle: function () { return this.theme === themes.dark ? themes.light : themes.dark }
})
export default ThemedContext

