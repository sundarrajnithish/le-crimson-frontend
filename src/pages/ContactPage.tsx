import { useState, type FormEvent, type ReactNode } from "react";
import { useMutation } from "@tanstack/react-query";
import { CheckCircle2 } from "lucide-react";
import { useApi } from "../api/context";
import type { ContactMessage } from "../api/types";
import { Button } from "../components/ui/Button";
import { PageHeader } from "../components/ui/PageHeader";
import { config } from "../config";
import { validateContact, type ContactErrors } from "../lib/validation";

export default function ContactPage() {
  const api = useApi();
  const [errors, setErrors] = useState<ContactErrors>({});
  const send = useMutation({
    mutationFn: async (m: ContactMessage) => {
      if (!config.contactEndpoint) return api.sendContact(m);
      const res = await fetch(config.contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(m),
      });
      if (!res.ok) throw new Error("Your message couldn’t be sent. Please try again later.");
    },
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = {
      name: String(f.get("name") ?? ""),
      email: String(f.get("email") ?? ""),
      message: String(f.get("message") ?? ""),
    };
    const errs = validateContact(msg);
    setErrors(errs);
    if (Object.keys(errs).length === 0) send.mutate(msg);
    else document.getElementById(`contact-${Object.keys(errs)[0]}`)?.focus();
  };

  if (send.isSuccess) {
    return (
      <div className="container-page max-w-xl py-16 text-center">
        <CheckCircle2 className="mx-auto mb-4 size-12 text-ok" aria-hidden="true" />
        <h1 className="headline text-3xl">Thanks, message received</h1>
        <p className="mt-2 text-muted">We usually reply within two working days.</p>
      </div>
    );
  }

  const field = (name: keyof ContactMessage, label: string, input: ReactNode) => (
    <div>
      <label htmlFor={`contact-${name}`} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      {input}
      {errors[name] && (
        <p id={`contact-${name}-error`} className="mt-1 text-sm text-bad">
          {errors[name]}
        </p>
      )}
    </div>
  );
  const aria = (name: keyof ContactMessage) => ({
    id: `contact-${name}`,
    name,
    "aria-invalid": !!errors[name],
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
  });

  return (
    <div className="container-page max-w-xl py-10">
      <PageHeader kicker="Contact" title="Let’s connect">
        Questions, feedback or a source you’d like us to add? Send a note.
      </PageHeader>
      <form noValidate onSubmit={onSubmit} className="space-y-5">
        {field("name", "Name", <input {...aria("name")} autoComplete="name" className="field" />)}
        {field(
          "email",
          "Email",
          <input {...aria("email")} type="email" autoComplete="email" className="field" />,
        )}
        {field(
          "message",
          "Message",
          <textarea {...aria("message")} rows={5} className="field resize-y" />,
        )}
        {send.isError && (
          <p role="alert" className="text-sm text-bad">
            {send.error instanceof Error ? send.error.message : "Something went wrong."}
          </p>
        )}
        <Button type="submit" size="lg" disabled={send.isPending}>
          {send.isPending ? "Sending…" : "Send message"}
        </Button>
      </form>
    </div>
  );
}
