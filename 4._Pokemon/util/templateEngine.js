import fs from "fs";


export function renderPage(path, options = {tabTitle : "Pokemon", cssLink:""}){
    const page = fs.readFileSync("./public/pages/"+ path).toString();
    return navComponent
        .replace("%%TAB_TITLE%%", options.tabTitle)
        .replace("%%PAGE_CSS_LINK%%", options.cssLink)
        + page
        + footerComponent;



}
const navComponent = fs.readFileSync("./public/components/navbar/navbar.html").toString();
const footerComponent = fs.readFileSync("./public/components/footer/footer.html").toString();

const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
export const frontpagePage = navComponent.replace("%%TAB_TITLE%%", "Pokemon")
                                    .replace("%%PAGE_CSS_LINK%%",`<link rel="stylesheet" href="./pages/frontpage/frontpage.css"`) + frontpage + footerComponent;

const battle = fs.readFileSync("./public/pages/battle/battle.html").toString();
export const battlePage = navComponent.replace("%%PAGE_CSS_LINK%%",`<link rel="stylesheet" href="./pages/battle/battle.css"`) + battle + footerComponent;

const contactpage = fs.readFileSync("./public/pages/contactpage/contactpage.html").toString();
export const contactpagePage = navComponent.replace("%%TAB_TITLE%%", "contacts").replace("%%PAGE_CSS_LINK%%","") + contactpage + footerComponent;


export function injectData(pageString, data) {
    const brokenUpHTML = pageString.split("</body>");
    const variableName = Object.keys({data})[0];
    return brokenUpHTML[0] + `<script>const ${variableName} = ${JSON.stringify(data)}</script></body>` + brokenUpHTML[1];
}