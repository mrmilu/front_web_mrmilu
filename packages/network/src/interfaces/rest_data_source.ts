export interface GetOptions {
  params?: Record<string, unknown>;
}

export interface PostOptions {
  body?: Record<string, unknown>;
}

export type PutOptions = PostOptions;
export type PatchOptions = PostOptions;
export type DeleteOptions = GetOptions;

export interface IRestDataSource {
  get?<T>(url: string, options?: GetOptions): Promise<T>;

  post?<T>(url: string, options?: PostOptions): Promise<T>;

  put?<T>(url: string, options?: PutOptions): Promise<T>;

  patch?<T>(url: string, options?: PatchOptions): Promise<T>;

  delete?<T>(url: string, options?: DeleteOptions): Promise<T>;
}
