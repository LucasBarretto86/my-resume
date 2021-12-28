import profile from "../profile.json"
import Componentizer from "lucasbarretto86.componentizer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { PDFGenerator } from "./libs/pdf_generator";

import "./index.scss";

const state = {
    profile: profile.pt
}

export default class App extends Componentizer {
    render() {
        return this.build("div", "", { id: "app", class: "app" },
            ["div", "", { id: "resume" },
                new Header(state.profile.personal),
                new Main(state.profile),
            ],
            new Footer({ generate: PDFGenerator.generate })
        )
    }
}

document.body.appendChild(new App())