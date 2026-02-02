export type Role = string; // qualquer string

// Identificador “dono” da encomenda no mock (pode ser restaurante, loja, etc.)
export interface Order {
  id: string;
  ownerId: string; // antes: restaurant_id. Agora é genericamente "ownerId"
  status:
    | 'Pendente'
    | 'Aceite'
    | 'Preparação'
    | 'Pronto'
    | 'Levantado'
    | 'Entregue'
    | 'Cancelado';
  items_total: number;
  delivery_fee: number;
  total: number;
  created_at: string;
  accepted_at?: string | null;
  ready_estimate_minutes?: number | null;
  ready_at?: string | null;
  rejection_reason?: string | null;
}

export interface OrderItem {
  id: string;
  order_id: string;
  name: string;
  quantity: number;
  price: number;
}