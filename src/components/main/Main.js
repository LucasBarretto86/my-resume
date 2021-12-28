import Componentizer from "lucasbarretto86.componentizer"
import SectionPersonal from "../section_personal/SectionPersonal"
import SectionLinks from "../section_links/SectionLinks"
import SectionSkills from "../section_skills/SectionSkills"
import SectionParagraphs from "../section_paragraphs/SectionParagraphs"
import SectionInfos from "../section_infos/SectionInfos"
import "./Main.scss"

export default class Main extends Componentizer {
    constructor(props) {
        super(props)
    }

    render() {
        return this.build("main", "", { id: "main", class: "main" },
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