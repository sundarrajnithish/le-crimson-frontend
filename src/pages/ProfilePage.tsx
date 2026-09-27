import { useState, type FormEvent } from "react";
import { Link } from "react-router";
import { MapPin, Pencil } from "lucide-react";
import { useConnections, usePosts } from "../api/queries";
import { useAuth, useUser } from "../auth/context";
import { PostCard } from "../components/social/PostCard";
import { Avatar } from "../components/ui/Avatar";
import { Button } from "../components/ui/Button";
import { EmptyState } from "../components/ui/States";
import { toast } from "../components/ui/toast";
import { CATEGORIES } from "../lib/categories";
import { formatDate } from "../lib/format";
import { useSaved } from "../lib/saved";

export default function ProfilePage() {
  const user = useUser();
  const { updateUser } = useAuth();
  const { saved } = useSaved();
  const posts = usePosts();
  const connections = useConnections();
  const [editing, setEditing] = useState(false);

  const mine = (posts.data ?? []).filter((p) => p.author.id === user.id);
  const stats = [
    { label: "Saved", value: saved.length, to: "/saved" },
    { label: "Shared", value: mine.length, to: "/community" },
    {
      label: "Friends",
      value: connections.data?.friends.length ?? 0,
      to: "/connections?tab=friends",
    },
    {
      label: "Followers",
      value: connections.data?.followers.length ?? 0,
      to: "/connections?tab=followers",
    },
  ];

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    updateUser({
      name: name || user.name,
      location: String(form.get("location") ?? "").trim(),
      bio: String(form.get("bio") ?? "").trim(),
    });
    setEditing(false);
    toast("Profile updated");
  };

  return (
    <div className="container-page max-w-4xl py-8">
      <section className="card overflow-hidden">
        <div
          className="h-28 bg-gradient-to-r from-crimson/90 via-crimson/60 to-crimson/20"
          aria-hidden="true"
        />
        <div className="px-6 pb-6">
          <div className="-mt-12 flex flex-wrap items-end justify-between gap-4">
            <Avatar
              name={user.name}
              src={user.avatarUrl}
              size={96}
              className="ring-4 ring-surface"
            />
            {!editing && (
              <Button variant="secondary" size="sm" onClick={() => setEditing(true)}>
                <Pencil className="size-4" aria-hidden="true" /> Edit profile
              </Button>
            )}
          </div>

          {editing ? (
            <form onSubmit={onSubmit} className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium">
                Name
                <input
                  name="name"
                  defaultValue={user.name}
                  required
                  maxLength={60}
                  className="field mt-1.5"
                />
              </label>
              <label className="text-sm font-medium">
                Location
                <input
                  name="location"
                  defaultValue={user.location}
                  maxLength={60}
                  className="field mt-1.5"
                />
              </label>
              <label className="text-sm font-medium sm:col-span-2">
                Bio
                <textarea
                  name="bio"
                  defaultValue={user.bio}
                  rows={3}
                  maxLength={160}
                  className="field mt-1.5 resize-none"
                />
              </label>
              <div className="flex gap-2 sm:col-span-2">
                <Button type="submit">Save</Button>
                <Button variant="ghost" onClick={() => setEditing(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          ) : (
            <div className="mt-4">
              <h1 className="headline text-3xl">{user.name}</h1>
              <p className="text-sm text-muted">
                {user.email} · Joined {formatDate(user.joinedAt)}
                {user.role === "admin" && " · Admin"}
              </p>
              {user.location && (
                <p className="mt-2 flex items-center gap-1 text-sm text-muted">
                  <MapPin className="size-4" aria-hidden="true" /> {user.location}
                </p>
              )}
              {user.bio && <p className="mt-3 max-w-xl">{user.bio}</p>}
            </div>
          )}

          <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <Link
                key={s.label}
                to={s.to}
                className="rounded-xl bg-sunken px-4 py-3 hover:ring-1 hover:ring-rule"
              >
                <dt className="text-xs text-muted">{s.label}</dt>
                <dd className="headline text-2xl">{s.value}</dd>
              </Link>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="interests" className="mt-8">
        <div className="mb-3 flex items-center justify-between">
          <h2 id="interests" className="headline text-xl">
            Interests
          </h2>
          <Link to="/preferences" className="text-sm font-medium text-crimson hover:underline">
            Edit interests
          </Link>
        </div>
        <ul className="flex flex-wrap gap-2">
          {user.interests.map((i) => {
            const c = CATEGORIES[i];
            return (
              <li key={i}>
                <Link
                  to={`/topic/${i}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-rule bg-surface px-3 py-1.5 text-sm hover:border-crimson"
                >
                  <c.icon className="size-4 text-crimson" aria-hidden="true" /> {c.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section aria-labelledby="my-posts" className="mt-10">
        <h2 id="my-posts" className="headline mb-4 text-xl">
          Your shares
        </h2>
        {mine.length === 0 ? (
          <EmptyState title="You haven’t shared anything yet">
            Open any story and press Share to post it to the community.
          </EmptyState>
        ) : (
          <div className="space-y-4">
            {mine.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
