export interface User {
  id: string;
  username: string;
  email: string;
}

export interface Gist {
  id: string;
  title: string;
  description: string;
  filename: string;
  content: string;
  createdAt: Date;
  userId: string;
}

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
} 