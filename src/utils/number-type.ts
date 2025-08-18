/**
 * Verifica si una cadena es un número
 * @param str - La cadena a verificar
 * @returns true si NO es un número, false si SÍ es un número
 */
export function isNotNumber(str: string): boolean {
  // Verifica si la cadena está vacía
  if (str.trim() === '') {
    return true;
  }

  // Verifica si es un número usando Number() y isNaN()
  const num = Number(str);
  return isNaN(num);
}
