import Component from "../../libs/component"
import "./Footer.scss"
export default class Footer {
    constructor(props) {
        this.props = props;

        return this.render()
    }

    render() {
        return Component.build("footer", "", { id: "footer", class: "footer" },
            ["button", "generate PDF", { onclick: this.props.generate, class: "footer__button footer__button--pdf" }]
        )
    }

}