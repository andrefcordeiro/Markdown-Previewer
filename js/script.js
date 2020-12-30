/* função altera o html da div de id=html-area de acordo com o codigo markdown passado por parametro   */
function output(value) {

    localStorage.setItem('markdown-text', value) /* salva o codigo markdown no localStorage*/
    let toHtml = marked(value)
    document.getElementById('html-area').innerHTML = DOMPurify.sanitize(toHtml, { USE_PROFILES: { html: true } });
}

/* função que salva no clipboard o texto do elemento <p> passado por parametro  */
function copyToClipboard(element) {
    let e = document.getElementById(element);
    console.log(e)
    let elementText = e.textContent; //get the text content from the element
    navigator.clipboard.writeText(elementText);
}

/* faz download do html do elemento com id=elementId */
function saveHTML(elementId) {
    let e = document.getElementById(elementId).innerHTML;
    console.log(e)
    var link = document.getElementById("button-save");
    var file = new Blob([e], { type: "html" });
    var donwloadFile = "index" + "." + "html";
    link.href = URL.createObjectURL(file);
    link.download = donwloadFile

}

/* quando a page é renderizada */
window.onload = function () {
    let markdown_text = localStorage.getItem("markdown-text") /* recupera o codigo markdown do localStorage*/
    document.getElementById("md-area").innerHTML = markdown_text /* "seta" a text area com o texto recuperado */
    output(markdown_text) /* passando o markdown para html */
};