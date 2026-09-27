export interface GoogleProfile {
  sub: string;
  name: string;
  email: string;
  picture?: string;
}

/**
 * Decode the payload of a Google Identity Services ID token.
 * NOTE: this is for display only. A real backend must verify the token's
 * signature and audience before trusting it.
 */
export function decodeGoogleCredential(credential: string): GoogleProfile | null {
  try {
    const payload = credential.split(".")[1];
    if (!payload) return null;
    const json = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
    const bytes = Uint8Array.from(json, (c) => c.charCodeAt(0));
    const data = JSON.parse(new TextDecoder().decode(bytes)) as Partial<GoogleProfile>;
    if (!data.sub || !data.email) return null;
    return {
      sub: data.sub,
      email: data.email,
      name: data.name ?? data.email,
      picture: data.picture,
    };
  } catch {
    return null;
  }
}
