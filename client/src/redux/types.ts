export type AllStores = {
  auth: AuthStore,
  project: ProjectStore
}

export interface StoreAction {
  type: String,
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
  Authorization?: String,
};

export interface Project {
  id: Number,
  name: String,
};