/**
 * Clase `ValorNoEncontrado` que representa un error cuando un valor no es encontrado.
 * @extends {Error}
 */
export default class ValorNoEncontrado extends Error {
   
  /**
   * Crea una nueva instancia de `ValorNoEncontrado`.
   * @param {string} message - El mensaje de error.
   */
  constructor(message: string) {
    super(message);
  }
}