const footer = document.getElementById("foot")


const year = new Date().getFullYear();
const footerDiv = document.createElement("div")
const footerCopyRight = document.createElement("p")
footerCopyRight.textContent = `C ${year}`

footerDiv.appendChild(footerCopyRight);
footer.appendChild(footerDiv);

