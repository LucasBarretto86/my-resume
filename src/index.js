import profile from "../profile.json"
import Component from "./libs/component";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { PDFGenerator } from "./libs/pdf_generator";
import "./index.scss";

console.log(PDFGenerator)

document.body.append(Component.build("div", "", { id: "app", class: "app" },
    ["div", "", { id: "resume" },
        new Header(profile.personal),
        new Main(profile),
        new Footer({ module: PDFGenerator })
    ]
))