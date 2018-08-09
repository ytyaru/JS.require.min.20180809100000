define(function() {
    return class Human {
        constructor(name=null) { this._name = name; }
        get Name() { return this._name; }
        set Name(v) { if (v) { this._name = v; } }
        Speak() {
            alert(this._name);
            console.log(this._name);
            this._AppendParagraphElement(this._name);
        }
        _AppendParagraphElement(text) {
            const p = document.createElement("p");
            p.appendChild(document.createTextNode(text));
            p.setAttribute("title", text)
            document.body.appendChild(p);
        }
    };
});
