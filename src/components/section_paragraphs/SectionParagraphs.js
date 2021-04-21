import Component from "../../libs/component";

export default class SimpleList {
    constructor(props) {
        this.props = props

        return this.render()
    }

    render() {
        return Component.build("section", "", { id: "paragraphs", class: "paragraphs" },
            ["h3", this.props.header],
            ...this.props.contents.map(content => ["p", content]),
        )
    }
}