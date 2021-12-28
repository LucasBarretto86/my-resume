import profile from "../profile.json"
import Componentizer from "lucasbarretto86.componentizer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { PDFGenerator } from "./libs/pdf_generator";

import "./index.scss";

export default class App extends Componentizer {
    render() {
        this.build("div", "", { id: "app", class: "app" },
            ["div", "", { id: "resume" },
                new Header(profile.personal),
                // new Main(profile),
            ],
            // new Footer({ generate: PDFGenerator.generate })
        )
    }
}

new App().render()