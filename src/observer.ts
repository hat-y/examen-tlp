interface ISubscriber {
  sub(): void
}

class Soporte implements ISubscriber {
  sub(): void {
    console.log('Soporte ha sido notificado del cambio');
  }
}


class Equipo {
  private subscribe: ISubscriber[] = []
  private nombre: string
  private tipo: string
  private estado: string

  constructor(nombre: string, tipo: string, estado: string) {
    this.nombre = nombre
    this.tipo = tipo
    this.estado = estado
  }

  agregarObservador(sub: ISubscriber) {
    this.subscribe.push(sub)
  }

  notificar() {
    for (const sub of this.subscribe) {
      sub.sub()
    }
  }

  cambiarEstado(nuevoEstado: string) {
    this.estado = nuevoEstado
    console.log(`El equipo ${this.nombre} ha cambiado su estado a: ${this.estado}`);
    this.notificar()
  }
}

export const observer = () => {
  const soporte = new Soporte()
  const equipo = new Equipo('Nootebok', 'Portatil', 'disponible')
  equipo.agregarObservador(soporte)
  equipo.cambiarEstado('en reparacion')
}
