import Component from "../../libs/component";

export default class SectionPersonal {
    constructor(props) {
        this.props = props

        return this.render()
    }


    render() {
        return Component.build("section", "", { id: "personal" },
            ["h3", this.props.header, { class: "personal__header" }],
            ["p", this.fullAddress(), { class: "personal__address" }],
            ["p", this.phone(), { class: "personal__phone" }],
            ["p", this.props.email, { class: "personal__email" }]
        )
    }

    fullAddress() {
        return Object.values(this.props.address).join(", ")
    }

    phone() {
        return [this.props.phone.code, this.props.phone.number].join("-")
    }
}