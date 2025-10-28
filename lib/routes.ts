export const routes = {
  home: '/',
  login: '/login',
  cadastro: '/cadastro', 
  esqueciSenha: '/esqueci-senha',
} as const;

export type Route = typeof routes[keyof typeof routes];