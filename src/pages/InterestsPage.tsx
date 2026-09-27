import { useState } from "react";
import { useNavigate } from "react-router";
import { useUser, useAuth } from "../auth/context";
import { InterestPicker } from "../features/InterestPicker";
import { Button } from "../components/ui/Button";
import { PageHeader } from "../components/ui/PageHeader";
import { CATEGORY_IDS, type CategoryId } from "../lib/categories";

/** Used for both first-run onboarding (/welcome) and editing (/preferences). */
export default function InterestsPage({ mode }: { mode: "onboarding" | "edit" }) {
  const user = useUser();
  const { updateUser } = useAuth();
  const navigate = useNavigate();
  const [selected, setSelected] = useState<CategoryId[]>(user.interests);
  const [saved, setSaved] = useState(false);
  const onboarding = mode === "onboarding";

  const save = () => {
    // Keep canonical category order so navigation is stable.
    updateUser({ interests: CATEGORY_IDS.filter((c) => selected.includes(c)) });
    if (onboarding) navigate("/home", { replace: true });
    else setSaved(true);
  };

  return (
    <div className="container-page max-w-4xl py-10">
      <PageHeader
        kicker={onboarding ? "Welcome, " + user.name.split(" ")[0] : "Settings"}
        title={onboarding ? "What do you want to read about?" : "Your interests"}
      >
        Pick at least one topic. Your feed, navigation and suggestions are built from these, and you
        can change them any time.
      </PageHeader>

      <InterestPicker
        value={selected}
        onChange={(v) => {
          setSelected(v);
          setSaved(false);
        }}
      />

      <div className="sticky bottom-0 mt-8 flex flex-wrap items-center gap-3 border-t border-rule bg-paper/90 py-4 backdrop-blur">
        <Button size="lg" onClick={save} disabled={selected.length === 0}>
          {onboarding ? "Build my feed" : "Save interests"}
        </Button>
        <Button
          variant="ghost"
          onClick={() =>
            setSelected(selected.length === CATEGORY_IDS.length ? [] : [...CATEGORY_IDS])
          }
        >
          {selected.length === CATEGORY_IDS.length ? "Clear all" : "Select all"}
        </Button>
        <p className="text-sm text-muted" aria-live="polite">
          {saved ? "Saved ✓" : `${selected.length} selected`}
        </p>
      </div>
    </div>
  );
}
