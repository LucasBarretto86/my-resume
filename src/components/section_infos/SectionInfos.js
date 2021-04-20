import Component from "../../libs/component";

export default class SectionInfos {
    constructor(props) {
        this.props = props

        return this.render()
    }

    render() {
        return Component.build("section", "", { id: "infos", class: "infos" },
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
            ["h4", item.name, { class: "item__name" }],
            ["p", item.description, { class: "item__description" }],
            ["p", [item.from, item.to].filter(i => i !== "").join(" - "), { class: "item__from-to" }],
            ["p", item.details, { class: "item__details" }]
        )
    }
}