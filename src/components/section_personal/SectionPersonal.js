import Component from "../../libs/component";
import { Formatter } from "../../libs/formatter";
import "./SectionPersonal.scss";

export default class SectionPersonal {
    constructor(props) {
        this.props = props

        return this.render()
    }


    render() {
        return Component.build("section", "", { id: "personal", class: "personal" },
            ["h3", this.props.header, { class: "personal__header" }],
            ["p", Formatter.fullAddress(this.props.address), { class: "personal__address" }],
            ["p", Formatter.phone(this.props.phone), { class: "personal__phone" }],
            ["a", this.props.email, { class: "personal__email", href: `mailto:${this.props.email}` }]
        )
    }
}