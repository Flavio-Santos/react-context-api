export interface IUsuario {
  id: string;
  nome: string;
  renda: string;
}

export interface ITransacoes {
  id: string;
  nome: string;
  valor: number;
  tipo: 'receita' | 'despesa';
  data: string;
  categoria: string;
}
