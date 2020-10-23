class Device {
    constructor(){
        this.condition = false
    }
    turnOn() {
        console.log(`Прибор ${this.name} включен, потребляемая мощность равна ${this.voltage * this.amperage}`)
        this.condition = true
    }
    turnOff() {
        console.log(`Прибор ${this.name} выключен`)
        this.condition = false
    }
}

class Computers extends Device {
    constructor(name, voltage, amperage, ssd) {
        super()
        this.name = name
        this.voltage = voltage
        this.amperage = amperage
        this.ssd = ssd        
    }    
}

class Phones extends Device {
    constructor(name, voltage, amperage, display) {
        super()
        this.name = name
        this.voltage = voltage
        this.amperage = amperage
        this.display = display        
    }
    
}
const intel = new Computers('intel', 14, 2, 512)
const samsung = new Phones('samsung', 5, 4, 'TFT')