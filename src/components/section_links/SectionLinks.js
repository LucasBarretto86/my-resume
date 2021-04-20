import Component from "../../libs/component";

export default class LinksList {
    constructor(props) {
        this.props = props

        return this.render()
    }

    render() {
        return Component.build("section", "", { id: this.props.header, class: this.props.header },
            ["h3", this.props.header],
            ["ul", "", {}, ...this.items(this.props.items)]
        )
    }

    items(items) {
        if (items.length < 1) return

        return items.map(item => this.item(item))
    }

    item(item) {
        return Component.build("li", "", {}, ["a", item.name, { href: item.link, target: "_blank" }])
    }
}