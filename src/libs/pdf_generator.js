export const PDFGenerator = {
    generate() {
        const pdf = new jsPDF();

        pdf.addHTML(document.querySelector("#resume"), () => pdf.save('CV-Lucas-Barretto-e-Silva.pdf'))
    }
}