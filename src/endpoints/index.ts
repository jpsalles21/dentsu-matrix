const URL = 'http://localhost:8090'

export async function api(path: string, options?: RequestInit) {
  const res = await fetch(`${URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  })

  if (!res.ok) {
    const error = await res.text()
    throw new Error(error);
  }

  return res.json();
}