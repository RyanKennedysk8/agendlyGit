// Definindo o tipo para suas cores
export type ColorPalette = {
  corScreen: string;
  corButton: string;
  text: string;
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
  corButton: '#086bdb',
  text: '#2c3e50',
  textLight: '#ecf0f1',
  placeholder: 'rgba(0, 0, 0, 0.5)',
  background: '#f9f9f9',
  white: '#ffffff',
  black: '#000000',
  gray: '#8c8c8c',
} as const; // 'as const' para inferência de tipo literal

// Exportando o tipo para uso em outros arquivos
export type ColorKey = keyof typeof Colors;