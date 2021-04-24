import Component from "./libs/component";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import "./index.scss";

const profile = require("../profile.json")

document.body.append(Component.build("div", "", { id: "app", class: "app" },
    new Header(profile.personal),
    new Main(profile)
))