export const PDFGenerator = {
    generate() {
        const generator = new jsPDF();

        generator.fromHTML(document.querySelector("#resume"), 15, 15, {
            'width': 170,
        });

        generator.save('CV-Lucas-Barretto-e-Silva.pdf');
    }
}