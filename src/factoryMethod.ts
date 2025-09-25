interface IEquipoTecnico {
  detalles(): void
}

class Servidor implements IEquipoTecnico {
  constructor(public nombre: string, public ram: string, public procesador: string) { }

  detalles(): void {
    console.log(`Tipo: Servidor, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`);
  }
}

class EquipoFactory {
  crearEquipo(type: string, nombre: string, ram: string, procesador: string): IEquipoTecnico {
    if (type === 'Servidor') {
      return new Servidor(nombre, ram, procesador);
    } else {
      throw new Error('Tipo de equipo no soportado');
    }
  }
}

export const factory = () => {
  const factory = new EquipoFactory();

  const servidor = factory.crearEquipo('Servidor', 'Dell R740', '32GB', 'Xeon');
  servidor.detalles();
}

