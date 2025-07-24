import "@testing-library/jest-dom";

// Asegurar que el DOM esté disponible
if (typeof global !== "undefined") {
  global.document = document;
  global.window = window;
} 