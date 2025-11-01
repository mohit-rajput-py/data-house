import React from "react";
import DatasetTable from "./DatasetTable";

const Body = () => {
  return (
    <div className="p-8 max-w-[1200px] mx-auto text-foreground">

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight">
        Dataset Overview
      </h2>

      <p className="leading-7 mt-6">
        Our platform provides a wide range of datasets from{" "}
        <a
          href="#"
          className="text-primary font-medium underline underline-offset-4 hover:text-primary/80"
        >
          open data sources
        </a>{" "}
        to curated private uploads. Each dataset includes its schema, size, and
        usage examples.
      </p>

      <blockquote className="mt-6 border-l-2 pl-6 italic text-muted-foreground">
        “Data is the new oil, but only when refined with insight.”
      </blockquote>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Supported Formats
      </h3>

      <p className="leading-7 mt-6">
        You can upload or import datasets in the following formats:
      </p>

      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>CSV — Tabular data with headers</li>
        <li>JSON — Nested data objects</li>
        <li>Excel — Multiple sheet datasets</li>
        <li>Parquet — Columnar data (for large datasets)</li>
      </ul>

      {/* Section: Table */}
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Example Dataset Table
      </h3>

      <div className="my-6 w-full overflow-x-auto">
        <DatasetTable />
      </div>

      {/* Inline Code Example */}
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-10">
        Inline Code Example
      </h4>

      <p className="leading-7 mt-6">
        You can load your dataset directly from a URL using{" "}
        <code className="bg-muted rounded px-[0.3rem] py-[0.2rem] break-words font-mono text-sm font-semibold">
          pd.read_csv("https://example.com/data.csv")
        </code>
        or drag and drop your local files.
      </p>

      {/* Section: Upload Guidelines */}
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Upload Guidelines
      </h3>

      <p className="leading-7 mt-6">
        Maximum upload size is <strong>200MB</strong> per dataset. You can also
        connect Google Drive or GitHub repositories to sync data automatically.
      </p>

      <p className="text-muted-foreground text-sm mt-8">
        Tip: For large datasets, prefer{" "}
        <span className="font-semibold">Parquet</span> format to save space and
        improve load speed.
      </p>

      {/* Footer Note */}
      <div className="mt-10 border-t pt-8">
        <p className="text-lg font-semibold">
          Explore, visualize, and share datasets — all in one place.
        </p>
        <p className="text-muted-foreground text-sm">Created By Mohit Rajput</p>
      </div>
    </div>
  );
};

export default Body;
