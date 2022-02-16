export type AllStores = {
  auth: AuthStore,
  project: ProjectStore
}

export interface StoreAction {
  type: string,
  payload: any
};

export interface AuthStore {
  user: User | null,
  header: HTTPHeader,
};

export interface ProjectStore {
  projects: Project[]
};

export interface User {

};

export interface HTTPHeader {
  Authorization?: string,
};

export interface Project {
  id: string,
  title: string,
  subtitle?: string,
  tasks?: string[],
  extra?: string,
  blocks?: Block[]
};

export interface Block {
  type: string,
  title?: string,
  content?: string | string[] | Block[],
  alt?: string,
  size?: string,
  height?: number,
  align?: string,
  sticker?: string,
  style?: string,
  percent?: number,
};