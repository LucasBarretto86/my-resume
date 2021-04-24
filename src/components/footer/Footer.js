import Component from "../../libs/component"
import "./Footer.scss"
export default class Footer {
    constructor(props) {
        this.props = props

        return this.render()
    }

    render() {
        return Component.build("footer", "", { id: "footer", class: "footer" },
            // ["button", "generate PDF", { event: { function: this.props.module.generate, action: "click" } }]
            ["button", "generate PDF", { class: "footer__button footer__button--pdf", "data-controller": "pdf_generator", "data-action": "click->generate" }]
        )
    }
}