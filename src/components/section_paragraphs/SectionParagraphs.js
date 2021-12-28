import Componentizer from "lucasbarretto86.componentizer";

export default class SimpleList extends Componentizer {
    constructor(props) {
        super(props)
    }

    render() {
        return this.build("section", "", { id: "paragraphs", class: "paragraphs" },
            ["h3", this.props.header],
            ...this.props.contents.map(content => ["p", content]),
        )
    }
}