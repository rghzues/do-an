import { useMemo } from "react";
import { useData } from "../kotex/HookContext";

export default function useHook() {
  const { favorites, filters, festivals } = useData();

  const liked = useMemo(() => {
    return favorites.reduce((acc, like) => {
      acc[like.festivalId] = (acc[like.festivalId] || 0) + 1;
      return acc;
    }, {});
  }, [favorites]);

  const featured = useMemo(() => {
    return festivals
      .map((f) => ({
        ...f,
        likes: liked[f.id] || 0,
      }))
      .sort((a, b) => b.likes - a.likes);
  }, [festivals, liked]);

  const months = useMemo(() => {
    return featured
      .filter((f) => new Date(f.startDate).getMonth() === new Date().getMonth())
      .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  }, [featured]);

  const currently = useMemo(() => {
    const now = new Date();

    return months.filter(
      (f) => now >= new Date(f.startDate) && now <= new Date(f.endDate),
    );
  }, [months]);

  const upcoming = useMemo(() => {
    const now = new Date();

    return months.filter((f) => new Date(f.startDate) > now);
  }, [months]);

  const filtered = useMemo(() => {
    return festivals
      .filter((f) => {
        return (
          (!filters.country || f.country === filters.country) &&
          (!filters.religion || f.religion === filters.religion) &&
          (!filters.month || new Date(f.startDate).getMonth() === filters.month)
        );
      })
      .sort((a, b) =>
        filters.sort === "new"
          ? new Date(b.updatedAt) - new Date(a.updatedAt)
          : new Date(a.updatedAt) - new Date(b.updatedAt),
      );
  }, [festivals, filters]);

  return {
    featured,
    filtered,
    months,
    currently,
    upcoming,
    liked,
  };
}
