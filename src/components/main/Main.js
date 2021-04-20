import Component from "../../libs/component"
import SectionPersonal from "../section_personal/SectionPersonal"
import SectionLinks from "../section_links/SectionLinks"
import SectionSkills from "../section_skills/SectionSkills"
import SectionParagraphs from "../section_paragraphs/SectionParagraphs"
import SectionInfos from "../section_infos/SectionInfos"

export default class Main {
    constructor(props) {
        this.props = props

        return this.render()
    }

    render() {
        return Component.build("main", "", { id: "main", class: "main" },
            ["div", "", { id: "sidebar", class: "sidebar" },
                new SectionPersonal(this.props.personal),
                new SectionLinks(this.props.links),
                ...this.props.skills.map(skill => new SectionSkills(skill))
            ],
            ["div", "", { id: "content", class: "content" },
                new SectionParagraphs(this.props.paragraphs),
                ...this.props.infos.map(info => new SectionInfos(info))
            ]
        )
    }
}