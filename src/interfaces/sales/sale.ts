// Generated by https://quicktype.io

import { Product } from "../product";

export interface Sale {
    id:      number;
    client:  string;
    total:   number;
    details: Detail[];
}

export interface Detail {
    amount:  number;
    product: Product;
}