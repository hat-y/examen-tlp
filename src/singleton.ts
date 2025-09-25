class Configuracion {
  private static instancia: Configuracion

  public static obtenerInstancia() {
    if (!Configuracion.instancia) {
      this.instancia = new Configuracion()
    }

    return Configuracion.instancia
  }

  set(modo: string) {
    if (modo === 'producción')
  }
}

