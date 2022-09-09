export interface GetProductsResult {
    list : IProducts
}

export interface IProducts {
    products: IProduct[];
}

export interface IProduct {
    SKU?:         string;
    code?:        number | null;
    name?:        string;
    description?: null | string;
    pictures?:    string[];
    price?:       number;
    currency?:    string;
    __v?:         number;
    sku?:         string;
    createdAt?:   Date;
    updatedAt?:   Date;
}
