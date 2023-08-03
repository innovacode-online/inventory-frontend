// Generated by https://quicktype.io

import { Category } from "./category";

export interface Product {
    id:          number;
    name:        string;
    description: string;
    stock:       number;
    slug:        string;
    price:       number;
    image:       string;
    category:    Category;
    createdAt:   string;
}