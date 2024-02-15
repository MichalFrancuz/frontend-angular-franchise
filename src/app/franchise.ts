export class Franchise {
  id: number | null;
  name: string;
  address: string;
  website: string;
  founded: number | null;
  investment: string;
  franchiseFee: string;
  type: string;

  constructor(franchise: Partial<Franchise> = {}) {
    this.id = franchise?.id || null;
    this.name = franchise?.name || '';
    this.address = franchise?.address || '';
    this.website = franchise?.website || '';
    this.founded = franchise?.founded || null;
    this.investment = franchise?.investment || '';
    this.franchiseFee = franchise?.franchiseFee || '';
    this.type = franchise?.type || '';
  }
}
