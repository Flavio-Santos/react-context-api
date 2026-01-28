export interface IUsuario {
  id: number;
  nome: string;
  renda: string;
}

export interface ITransacoes {
  id: number;
  nome: string;
  valor: number;
  tipo: 'receita' | 'despesa';
  data: string;
  categoria: string;
}
