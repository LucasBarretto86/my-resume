export default class Component {
    static build(tag, content = "", options = {}, ...children) {
        let element = document.createElement(tag, options);

        if (content !== "") element.innerText = content

        if (Object.keys(options).length > 0) {
            let event = Object.entries(options).filter(option => option[0].match(/on\w*/)).flat()

            if (event.length > 0) {
                element.addEventListener(event[0].slice(2), event[1])
                delete options[event[0]]
            }

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