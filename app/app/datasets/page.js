"use client";

import { useState, useEffect } from "react";
import FilterPaner from "@/components/FilterPaner";
import DatasetCard from "@/components/DatasetCard";
import PagesNum from "@/components/PagesNum";

export default function Datasets() {
  const [datasets, setDatasets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const category = "movies"; 

  useEffect(() => {
    async function fetchDatasets() {
      try {
        const res = await fetch(`/api/get-dataset?catagory=${category}`);
        if (!res.ok) throw new Error("Failed to fetch datasets");
        const data = await res.json();
        setDatasets(data.files || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchDatasets();
  }, [category]);

  if (loading) return <p className="text-center text-gray-500">Loading datasets...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="w-full">
      <FilterPaner />
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
