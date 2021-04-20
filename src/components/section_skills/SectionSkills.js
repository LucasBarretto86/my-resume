import Component from "../../libs/component";

export default class SectionSkills {
    constructor(props) {
        this.props = props

        return this.render()
    }

    render() {
        return Component.build("section", "", { id: "skills", class: "skills" },
            ["h3", this.props.header, { class: "header" }],
            ["div", "", { class: "items" }, ...this.items(this.props.items)]
        )
    }

    items(items) {
        if (items.length < 1) return

        return items.map(item => this.item(item))
    }

    item(item) {
        return Component.build("div", "", { class: "items__item" },
            ["h4", item.name, { class: "items__name" }],
            ["meter", "", { class: "items__level", value: item.level, min: "0", max: "5" }]
        )
    }
}