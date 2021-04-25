import Component from "../../libs/component";
import { Formatter } from "../../libs/formatter";
import "./SectionInfos.scss";

export default class SectionInfos {
    constructor(props) {
        this.props = props

        return this.render()
    }

    render() {
        return Component.build("section", "", { class: "infos" },
            ["h3", this.props.header, { class: "infos_header" }],
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
            ["p", Formatter.filteredJoin([item.from, item.to], " — "), { class: "item__from-to" }],
            ["p", item.details, { class: "item__details" }]
        )
    }
}