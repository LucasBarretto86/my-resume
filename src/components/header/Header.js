import Componentizer from "lucasbarretto86.componentizer";
import { Formatter } from "../../libs/formatter"

import avatar from "../../assets/images/pictures/avatar.jpeg"
import whatsapp_icon from "../../assets/images/icons/whatsapp.png"

import "./Header.scss";

export default class Header extends Componentizer {
    constructor(props) {
        super(props)
    }

    render() {
        return this.build("div", "", { id: "header", class: "header" },
            ["div", "", { class: "header__block header__block--top" },
                ["img", "", { class: "header__avatar", src: avatar }],
                ["h1", Formatter.fullName(this.props), { class: "header__fullname" }]
            ],
            ["div", "", { class: "header__block header__block--bottom" },
                ["div", "", { class: "header__info" },
                    ["span", this.props.position, { class: "header__position" }],
                    ["span", Formatter.shortAddress(this.props.address), { class: "header__address" }],
                    ["span", Formatter.phone(this.props.phone), { class: "header__phone" },
                        ["img", "", { src: whatsapp_icon, alt: "whatsapp-icon" }]
                    ]
                ],
            ]
        )
    }
}