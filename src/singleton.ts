class Configuracion {
  private static instancia: Configuracion
  private modo: string = ''

  private constructor() { }

  public static obtenerInstancia() {
    if (!Configuracion.instancia) {
      this.instancia = new Configuracion()
    }

    return Configuracion.instancia
  }

  set(modo: string, typeModo: string) {
    if (modo === 'modo') {
      this.modo = typeModo
    }
  }

  get() {
    return this.modo
  }
}


export const singleton = () => {
  const conf1 = Configuracion.obtenerInstancia()
  const conf2 = Configuracion.obtenerInstancia()
  conf1.set('modo', 'production')
  console.log(conf2.get())
}
