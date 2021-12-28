import Componentizer from "lucasbarretto86.componentizer";
import "./SectionLinks.scss";
export default class LinksList extends Componentizer {
    constructor(props) {
        super(props)
    }

    render() {
        return this.build("section", "", { id: this.props.header, class: "links" },
            ["h3", this.props.header, { class: "links__header" }],
            ["ul", "", {}, ...this.items(this.props.items)]
        )
    }

    items(items) {
        if (items.length < 1) return

        return items.map(item => this.item(item))
    }

    item(item) {
        return this.build("li", "", {}, ["a", item.name, { href: item.link, target: "_blank" }])
    }
}