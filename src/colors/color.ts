// Definindo o tipo para suas cores
export type ColorPalette = {
  corScreen: string;
  corButton: string;
  corText: string;
  textLight: string;
  placeholder: string;
  background: string;
  white: string;
  black: string;
  gray: string;
  // Adicione outras cores conforme necessário
};

// Implementação concreta das cores
export const Colors: ColorPalette = {
  corScreen: '#1b1b1b',
  corButton: '#0097fe',
  corText: '#000000',
  textLight: '#ecf0f1',
  placeholder: '#CCCCCC',
  background: '#f9f9f9',
  white: '#ffffff',
  black: '#000000',
  gray: '#8c8c8c',
} as const; // 'as const' para inferência de tipo literal

// Exportando o tipo para uso em outros arquivos
export type ColorKey = keyof typeof Colors;