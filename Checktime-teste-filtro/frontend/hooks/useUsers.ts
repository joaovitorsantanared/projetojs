"use client";

import { useEffect, useState } from "react";

export interface Usuario {
  id: number;
  nome: string;
  email: string;
}

export function useUser() {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/user/me")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        setUsuario(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const refetch = () => {
    setLoading(true);
    fetch("/api/user/me")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        setUsuario(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  return { usuario, loading, refetch };
}