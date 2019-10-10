export function sayHello(): String {
    return "Im not done with you yet"
}

export function delay1() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('After 1 seconds!')
        }, 1000);
    })
}

// Class
export class Person {
    name: String;
    gender: Boolean;
    constructor(name: String, gender: Boolean) {
        this.name = name;
        this.gender = gender;
    }
    display(): String {
        let formatGender = this.gender ? "Male" : "Female";
        return `${this.name} ${formatGender}`
    }
    // Promise method
    delay2() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res('After 1 seconds!')
            }, 1000);
        })

    }

}
