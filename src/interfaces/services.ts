export interface IContent {
  name: string;
  description: string;
}

export interface ICategory {
  name: string;
  slug: string;
}

export interface IPackage {
  features: string[];
  name: string;
  price: string | number;
  service: number;
}

export interface IService {
  category_name: string;
  category_slug: string;
  title: string;
  description: string;
  category: number;
  packages: IPackage[];
}

export interface IWhyChooseOurServices {
  title: string;
  description: string;
}
