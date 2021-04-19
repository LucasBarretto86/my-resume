import Header from "./components/header/header";
import Main from "./components/main/Main";
import "./index.scss";

const profile = require("../profile.json")
const app = document.querySelector("#app");

app.append(new Header(profile.personal))
app.append(new Main(profile))