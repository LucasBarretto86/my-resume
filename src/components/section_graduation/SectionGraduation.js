import Component from "../../libs/component";

export default class SectionGraduation {
    constructor(props) {
        this.props = props

        return this.render()
    }

    // "institution": "FMU - Centro Universitário das Faculdades Metropolitanas Unidas",
    // "degree": "Análise e desenvolvimento de Sistemas",
    // "started_at": "Jan 2018",
    // "conclused_at": "Jun 2020"

    render() {
        return Component.build("section", "", { id: "graduation", class: "graduation" },
            ["h2", this.props.institution, { class: "graduation__institution" }],
            ["p", this.props.degree, { class: "graduation__degree" }],
            ["p", "", {},
                ["span", this.props.started_at, { class: "graduation__started_at" }],
                ["b", " - "],
                ["span", this.props.concluded_at, { class: "graduation__concluded_at" }]
            ]
        )
    }
}