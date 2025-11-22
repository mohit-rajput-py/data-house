"use client";

import { useState, useEffect } from "react";
import FilterPaner from "@/components/FilterPaner";
import DatasetCard from "@/components/DatasetCard";
import PagesNum from "@/components/PagesNum";

export default function Datasets() {
  const [filters, SetFilters] = useState({
    category: "all",
    sortBy: "random",
  });
  const [datasets, setDatasets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDatasets() {
      try {
        const res = await fetch(
          `/api/get-dataset?catagory=${filters.category}`
        );
        if (!res.ok) throw new Error("Failed to fetch datasets");
        const data = await res.json();
        console.log(data);

        setDatasets(data.files || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchDatasets();
  }, [filters.category]);

  useEffect(() => {
    let sorted = [...datasets || []]
    sorted = filters.sortBy === "random" ? sorted.sort(() => Math.random() - 0.5) : sorted
    sorted = filters.sortBy === "size" ? sorted.sort((a, b) => parseFloat(a.sizeMB) - parseFloat(b.sizeMB)) : sorted
    sorted = filters.sortBy === "random" ? sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) : sorted
    setDatasets(sorted)
  }, [filters.sortBy]);

  if (loading)
    return <p className="text-center text-gray-500">Loading datasets...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="w-full">
      <FilterPaner filters={filters} setFilters={SetFilters} count={datasets.length} />
      <div className="my-4 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {datasets.map((d, i) => (
          <DatasetCard
            key={i}
            name={d.name}
            size={`${d.sizeMB} MB`}
            type="CSV"
            url={d.url}
            records={d.records}
            date={new Date(d.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          />
        ))}
      </div>
      <PagesNum />
    </div>
  );
}
