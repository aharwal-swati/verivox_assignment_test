export interface RechargePlanModel {
  id: number;
  name: string;
  speed: { download: string; upload: string };
  benefit: Array<string>;
  price: number;
}
