function Device() {
    this.condition = false
}

Device.prototype.turnOn = function() {
    console.log(`Прибор ${this.name} включен, потребляемая мощность равна ${this.voltage * this.amperage}`)
    this.condition = true
}   

Device.prototype.turnOff = function() {
    console.log(`Прибор ${this.name} выключен`)
    this.condition = false
}

function Computers(name, voltage, amperage,ssd) {
    this.name = name,
    this.voltage = voltage,
    this.amperage = amperage
    this.ssd = ssd
}

function Phones(name, voltage, amperage, display ) {
    this.name = name,
    this.voltage = voltage,
    this.amperage = amperage,
    this.display = display
}

Computers.prototype = new Device()
Phones.prototype = new Device()

const intel = new Computers('intel', 14, 2, 512)
const samsung = new Phones('samsung', 5, 4, 'TFT')