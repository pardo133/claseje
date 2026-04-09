export class personajes {
    constructor(vida,nivel) {
        this.vida = vida;
        this.nivel = nivel;
    }
}
export class mago extends personajes {
    constructor(vida,nivel,mana){
        super(vida,nivel);
        this.mana = mana;
    }
}
export class guerrero extends personajes {
    constructor(vida,nivel,aguante){
        super(vida,nivel);
        this.aguante = aguante;
    }}



export class Vehiculo {
    constructor(marca, modelo, ruedas) {
        this.marca = marca;
        this.modelo = modelo;
        this.ruedas = ruedas;
    }
}

export class Coche extends Vehiculo {
    constructor(marca, modelo) {
        super(marca, modelo, 4); 
}}

export class Moto extends Vehiculo {
    constructor(marca, modelo) {
        super(marca, modelo, 2); 
    }
}
export class Camion extends Vehiculo {
    constructor(marca, modelo) {
        super(marca, modelo, 6); 
    }
}




export class Electrodomestico {
    constructor(nombre, voltaje, precio) {
        this.nombre = nombre;
        this.voltaje = voltaje;
        this.precio = precio;
    }
}

export class Lavadora extends Electrodomestico {
    constructor(nombre, voltaje, precio) {
        super(nombre, voltaje, precio);
        this.eficiencia = "A+++";
    }
    
    calcularPrecioFinal() {
        return this.precio + (this.precio * 0.05);
    }
}

export class Secadora extends Electrodomestico {
    constructor(nombre, voltaje, precio) {
        super(nombre, voltaje, precio);
        this.eficiencia = "C";
    }
    
    calcularPrecioFinal() {
        return this.precio + (this.precio * 0.15);
    }
}