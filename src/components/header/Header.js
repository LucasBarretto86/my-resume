import Component from "../../libs/component";
import { Formatter } from "../../libs/formatter"
import "./Header.scss";

export default class Header {
    constructor(props) {
        this.props = props

        return this.render()
    }

    render() {
        return Component.build("div", "", { id: "header", class: "header" },
            ["div", "", { class: "header__block header__block--top" },
                ["img", "", { class: "header__avatar", src: this.props.avatar }],
                ["h1", Formatter.fullName(this.props), { class: "header__fullname" }]
            ],
            ["div", "", { class: "header__block header__block--bottom" },
                ["div", "", { class: "header__info" },
                    ["span", this.props.position, { class: "header__position" }],
                    ["span", Formatter.shortAddress(this.props.address), { class: "header__address" }],
                    ["span", Formatter.phone(this.props.phone), { class: "header__phone" },
                        ["img", "", { src: this.props.phone.icon, alt: "whatsapp-icon" }]
                    ]
                ],
            ]
        )
    }
}