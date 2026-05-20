export const routes = { //é o que puxa pra outras páginas
  home: '/',
  login: '/login',
  cadastro: '/cadastro', 
  esqueciSenha: '/esqueci-senha',
  baterPonto: '/bater-ponto',
} as const;

export type Route = typeof routes[keyof typeof routes];