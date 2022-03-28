import { employeelist } from "./employee-list";
import { welcome } from "./welcome";
export function app() {
    const welElement = welcome()
    const tblElement = employeelist()

    const mainDivElement = document.createElement('div')
    mainDivElement.appendChild(welElement)
    mainDivElement.appendChild(tblElement)

    return mainDivElement
}