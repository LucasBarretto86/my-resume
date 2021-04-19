import Component from "../../libs/component"
import SectionGraduation from "../section_graduation/SectionGraduation"
import SectionPersonal from "../section_personal/SectionPersonal"

export default class Main {
    constructor(props) {
        this.props = props

        return this.render()
    }

    render() {
        return Component.build("main", "", { id: "main", class: "main" },
            ["div", "", { id: "sidebar", class: "sidebar" }, new SectionPersonal(this.props.personal)],
            ["div", "", { id: "content", class: "content" }, new SectionGraduation(this.props.graduation)]
        )
    }
}