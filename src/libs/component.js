export default class Component {
    static build(tag, content = "", options = {}, ...children) {
        let element = document.createElement(tag, options);
        let keys = Object.keys(options)

        if (content !== "") element.innerText = content

        if (keys.length > 0) {
            let events = Object.entries(options).filter(option => option[0].match(/controller|action|target/))
            console.log(events)
            keys.forEach(key => element.setAttribute(key, options[key]))
        }


        if (children.length > 0) {
            children.forEach(child => {
                if (Array.isArray(child)) {
                    element.appendChild(this.build(...child))
                } else {
                    element.append(child)
                }
            })
        }
        return element
    }
}