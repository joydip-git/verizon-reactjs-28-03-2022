export function welcome() {
    const title = 'welcome to employee payroll'
    const header = document.createElement('h2')
    header.innerText = title
    header.setAttribute('style', 'background-color:lime')
    return header
}