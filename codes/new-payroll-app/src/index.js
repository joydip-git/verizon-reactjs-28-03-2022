import { App } from "./components/app";
import { render } from "react-dom";
import React from "React";

// const appDesign = App()
const rootDiv = document.getElementById('root')
//render(appDesign, rootDiv)
render(<App />, rootDiv)