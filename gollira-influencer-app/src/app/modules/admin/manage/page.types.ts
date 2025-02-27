export interface InventoryProduct {
    id: string;
    category?: string;
    name: string;
    description?: string;
    tags?: string[];
    sku?: string | null;
    barcode?: string | null;
    brand?: string | null;
    vendor: string | null;
    stock: number;
    reserved: number;
    cost: number;
    basePrice: number;
    taxPercent: number;
    price: number;
    weight: number;
    thumbnail: string;
    images: string[];
    active: boolean;
}

export interface InventoryPagination {
    length: number;
    size: number;
    page: number;
    lastPage: number;
    startIndex: number;
    endIndex: number;
}

export interface InventoryCategory {
    id: string;
    parentId: string;
    name: string;
    slug: string;
}

export interface InventoryBrand {
    id: string;
    name: string;
    slug: string;
}

export interface InventoryTag {
    id?: string;
    title?: string;
}

export interface InventoryVendor {
    id: string;
    name: string;
    slug: string;
}

export interface Customer {
    item_type_id: string;
    vendor_id: string;
    location_id: string;
    unit_id: string;
    item_id:  string;
    name: string;
    description: string;
    brand: string;
    image: string;
    unit_cost: string;
    unit_price: string;
    set_type: string;
}

export interface PageEmployee {
    length: number;
    perPage: number;
    size: number;
    page: number;
    lastPage: number;
    startIndex: number;
    endIndex: number;
    sortBy: number;
}

