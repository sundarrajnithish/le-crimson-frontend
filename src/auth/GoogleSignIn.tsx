import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useState } from "react";
import { config } from "../config";
import { useTheme } from "../lib/theme";

/**
 * Google Identity Services button (replaces the retired gapi/auth2
 * `react-google-login` flow). Renders nothing unless VITE_GOOGLE_CLIENT_ID is set.
 */
export function GoogleSignIn({ onCredential }: { onCredential: (credential: string) => void }) {
  const { theme } = useTheme();
  const [error, setError] = useState<string | null>(null);
  if (!config.googleClientId) return null;
  return (
    <GoogleOAuthProvider clientId={config.googleClientId}>
      <div className="flex flex-col items-start gap-2">
        <GoogleLogin
          onSuccess={(res) => {
            if (!res.credential)
              return setError("Google didn’t return a credential. Please try again.");
            try {
              onCredential(res.credential);
            } catch (e) {
              setError(e instanceof Error ? e.message : "Sign-in failed.");
            }
          }}
          onError={() => setError("Google sign-in was cancelled or failed.")}
          theme={theme === "dark" ? "filled_black" : "outline"}
          shape="pill"
          text="continue_with"
        />
        {error && (
          <p role="alert" className="text-sm text-bad">
            {error}
          </p>
        )}
      </div>
    </GoogleOAuthProvider>
  );
}
