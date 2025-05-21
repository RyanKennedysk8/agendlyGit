// Definindo o tipo para suas cores
export type ColorPalette = {
  corScreen: string;
  corButton: string;
  corText: string;
  background:string;
  placeholder: string;
  blue: string;
  yellow: string;
  white: string;
  black: string;
  red: string;

  // Adicione outras cores conforme necessário
};

// Implementação concreta das cores
export const Colors: ColorPalette = {
  corScreen: '#1b1b1b',
  corButton: '#0097fe',
  corText: '#000000',
  background:"#ebebeb",
  placeholder: '#ececec',
  blue: '#12fecf',
  yellow: '#f7d602',
  white: '#ffffff',
  black: '#000000',
  red: "#ff0033",
} as const; // 'as const' para inferência de tipo literal

// Exportando o tipo para uso em outros arquivos
export type ColorKey = keyof typeof Colors;