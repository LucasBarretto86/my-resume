import Component from "../../libs/component";

export default class Header {
    constructor(props) {
        this.props = props

        return this.render()
    }

    render() {
        return Component.build("div", "", { id: "header" },
            ["img", "", { class: "header__avatar", src: `${this.props.avatar}` }],
            ["h1", this.fullName(), { class: "header__fullname" }],
            ["div", "", { class: "header__info" },
                ["span", this.props.position, { class: "header__position" }],
                ["span", this.shortAddress(), { class: "header__address" }],
                ["span", this.phone(), { class: "header__phone" }],
            ],

        )
    }


    fullName() {
        return [this.props.name, this.props.surname].join(" ")
    }

    shortAddress() {
        return [this.props.address.city, this.props.address.zipcode, this.props.address.country].join(", ")
    }

    phone() {
        return [this.props.phone.code, this.props.phone.number].join("-")
    }
}