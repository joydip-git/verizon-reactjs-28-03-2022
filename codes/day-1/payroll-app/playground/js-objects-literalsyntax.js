//1. objectr literal syntax
var joyObj = {
    name: 'Joydip',
    subject: 'React JS',
    experience: 17,
    print: function () {
        return this.name + ' ' + this.subject + ' ' + this.experience
    }
}

// console.log(joyObj.name)
// console.log(joyObj['subject'])
joyObj.location = 'Bengaluru'
for (var propName in joyObj) {
    var propVal = joyObj[propName]
    console.log(`${propName}:${propVal}`)
}