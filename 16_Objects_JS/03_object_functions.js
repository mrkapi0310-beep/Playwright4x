let a = {
    name: "ramesh",
    getName() {
        return this.name;
    }
}
getName = a.getName;
console.log(a.getName());
console.log(getName());