import Componentizer from "lucasbarretto86.componentizer";
import { Formatter } from "../../libs/formatter";
import "./SectionPersonal.scss";

export default class SectionPersonal extends Componentizer {
    constructor(props) {
        super(props)
    }


    render() {
        return this.build("section", "", { id: "personal", class: "personal" },
            ["h3", this.props.header, { class: "personal__header" }],
            ["p", Formatter.fullAddress(this.props.address), { class: "personal__address" }],
            ["p", Formatter.phone(this.props.phone), { class: "personal__phone" }],
            ["a", this.props.email, { class: "personal__email", href: `mailto:${this.props.email}` }]
        )
    }
}