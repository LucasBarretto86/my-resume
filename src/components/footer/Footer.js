import Componentizer from "lucasbarretto86.componentizer"
import "./Footer.scss"

export default class Footer extends Componentizer {
    constructor(props) {
        super(props)
    }

    render() {
        return this.build("footer", "", { id: "footer", class: "footer" },
            ["button", "generate PDF", { onclick: this.props.generate, class: "footer__button footer__button--pdf" }]
        )
    }

}