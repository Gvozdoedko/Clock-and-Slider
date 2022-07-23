class createElement {
    constructor(name, prop, another, toEl) {
        this.name = name;
        this.prop = prop;
        this.another = another;
        this.toEl = toEl;
    }

    createEl() {
        let newEl = document.createElement(`${this.name}`);
        for (const key in this.prop) {
            if (key === `className`) {
                newEl.setAttribute(`class`, `${this.prop[key]}`)
            } else {
                newEl.setAttribute(`${key}`, `${this.prop[key]}`);
            }
            
        }
        newEl.textContent = `${this.another}`;
        document.getElementById(`${this.toEl}`).append(newEl);
    }

}

