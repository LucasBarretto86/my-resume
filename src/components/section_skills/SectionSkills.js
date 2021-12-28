import Componentizer from "lucasbarretto86.componentizer";
import "./SectionSkills.scss";

export default class SectionSkills extends Componentizer {
    constructor(props) {
        super(props)
    }

    render() {
        return this.build("section", "", { id: "skills", class: "skills" },
            ["h3", this.props.header, { class: "skills__header" }],
            ["div", "", { class: "skills__items" }, ...this.items(this.props.items)]
        )
    }

    items(items) {
        if (items.length < 1) return

        return items.map(item => this.item(item))
    }

    item(item) {
        return this.build("div", "", { class: "items__item" },
            ["h4", item.name, { class: "items__name" }],
            ["meter", "", { class: "items__level", value: item.level, min: "0", max: "5" }]
        )
    }
}