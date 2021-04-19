export default class Component {
    static build(tag, content = "", options = {}, ...children) {
        let element = document.createElement(tag, options);

        if (content !== "") element.innerText = content

        if (Object.keys(options).length > 0) {
            Object.keys(options).forEach(key => element.setAttribute(key, options[key]))
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