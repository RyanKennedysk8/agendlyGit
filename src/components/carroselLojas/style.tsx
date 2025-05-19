import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  lista: {
    paddingHorizontal: 10,
  },
  card: {
    width: width * 0.8,
    marginRight: 16,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    elevation: 4,
  },
  imagem: {
    width: '100%',
    height: 180,
  },
  infoContainer: {
    padding: 12,
  },
  avaliacaoBox: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: '#000000a0',
    padding: 6,
    borderRadius: 8,
  },
  avaliacao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  avaliacoes: {
    color: '#050505',
    fontSize: 12,
  },
  nome: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  endereco: {
    fontSize: 14,
    color: '#2b2b2b',
  },
});
