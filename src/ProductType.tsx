// Market-er data-change structure
export interface MarketPrice {
  market: string;
  division: string;
  min: number;
  max: number;
}

// Price change percentage ebong direction-er structure
export interface PriceChange {
  dir: "up" | "down"; // up ba down hote pare
  pct: number;
}

// Main product-er interface
export interface ProductItem {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: PriceChange;
  markets: MarketPrice[];
}