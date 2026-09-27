import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { CategoryId } from "../lib/categories";
import { useApi } from "./context";
import type { ConnectionAction, ContactMessage, Post, User } from "./types";

export const keys = {
  articles: (category?: CategoryId) => ["articles", category ?? "all"] as const,
  article: (id: string) => ["article", id] as const,
  search: (q: string) => ["search", q] as const,
  posts: ["posts"] as const,
  connections: ["connections"] as const,
  admin: ["admin"] as const,
};

export function useArticles(category?: CategoryId) {
  const api = useApi();
  return useQuery({
    queryKey: keys.articles(category),
    queryFn: () => api.listArticles({ category }),
  });
}

export function useArticle(id: string) {
  const api = useApi();
  return useQuery({ queryKey: keys.article(id), queryFn: () => api.getArticle(id) });
}

export function useSearch(query: string) {
  const api = useApi();
  const q = query.trim();
  return useQuery({
    queryKey: keys.search(q),
    queryFn: () => api.searchArticles(q),
    enabled: q.length >= 2,
    placeholderData: keepPreviousData,
  });
}

export function usePosts() {
  const api = useApi();
  return useQuery({ queryKey: keys.posts, queryFn: () => api.listPosts() });
}

export function useCreatePost() {
  const api = useApi();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (input: { articleId: string; comment: string; author: User }) =>
      api.createPost(input),
    onSuccess: (post) => qc.setQueryData<Post[]>(keys.posts, (old) => [post, ...(old ?? [])]),
  });
}

export function useToggleLike() {
  const api = useApi();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (postId: string) => api.toggleLike(postId),
    // Optimistic update: flip immediately, roll back on failure.
    onMutate: async (postId) => {
      await qc.cancelQueries({ queryKey: keys.posts });
      const previous = qc.getQueryData<Post[]>(keys.posts);
      qc.setQueryData<Post[]>(keys.posts, (old) =>
        old?.map((p) =>
          p.id === postId
            ? { ...p, likedByMe: !p.likedByMe, likes: p.likes + (p.likedByMe ? -1 : 1) }
            : p,
        ),
      );
      return { previous };
    },
    onError: (_err, _id, ctx) => ctx?.previous && qc.setQueryData(keys.posts, ctx.previous),
    onSuccess: (post) =>
      qc.setQueryData<Post[]>(keys.posts, (old) => old?.map((p) => (p.id === post.id ? post : p))),
  });
}

export function useConnections() {
  const api = useApi();
  return useQuery({ queryKey: keys.connections, queryFn: () => api.getConnections() });
}

export function useUpdateConnection() {
  const api = useApi();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ memberId, action }: { memberId: string; action: ConnectionAction }) =>
      api.updateConnection(memberId, action),
    onSuccess: (data, { action }) => {
      qc.setQueryData(keys.connections, data);
      if (action === "block" || action === "unblock")
        void qc.invalidateQueries({ queryKey: keys.posts });
    },
  });
}

export function useAdminStats() {
  const api = useApi();
  return useQuery({ queryKey: keys.admin, queryFn: () => api.getAdminStats() });
}

export function useSendContact() {
  const api = useApi();
  return useMutation({ mutationFn: (msg: ContactMessage) => api.sendContact(msg) });
}
