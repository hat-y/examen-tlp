interface Equipo {
  agregarEquipo(nombre: string, tipo: string, disponible: string): void
}

class InventarioViejo {
  private equipos: { nombre: string, tipo: string, disponible: string }[] = []

  agregarEquipo(nombre: string, tipo: string, disponible: string) {
    this.equipos.push({ nombre, tipo, disponible })
    console.log(`Equipo agregado al inventario viejo: ${nombre}, ${tipo}, ${disponible}`)
  }

  listarEquipos(): { nombre: string, tipo: string, disponible: string }[] {
    return this.equipos
  }
}

class AdaptadorInventario implements Equipo {
  private inventarioViejo: InventarioViejo

  constructor(inventarioViejo: InventarioViejo) {
    this.inventarioViejo = inventarioViejo
  }

  agregarEquipo(nombre: string, tipo: string, disponible: string): void {
    this.inventarioViejo.agregarEquipo(nombre, tipo, disponible)
  }
}

export const adapter = () => {
  const inventarioViejo = new InventarioViejo()

  const adaptador = new AdaptadorInventario(inventarioViejo)
  adaptador.agregarEquipo("Router Cisco", "Red", "disponible")
  console.log(inventarioViejo.listarEquipos())
}
