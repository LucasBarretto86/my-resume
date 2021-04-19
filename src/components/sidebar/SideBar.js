import Component from "../../libs/component"
import SectionPersonal from "../section_personal/SectionPersonal"

export default class SideBar {
    constructor(props) {
        this.props = props
    }

    render() {
        let content = new SectionPersonal(this.props.personal).render()
        return Component.build("div", "", { id: "sidebar", class: "sidebar" }, content)
    }
}