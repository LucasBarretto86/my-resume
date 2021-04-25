export const PDFGenerator = {
    generate() {
        const pdf = new jsPDF('p', 'pt', 'a4');
        document.querySelector(".header__avatar").classList.add("hidden")
        pdf.addHTML(document.querySelector("#resume"), () => pdf.save('CV-Lucas-Barretto-e-Silva.pdf'))
    }
}