"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function DatasetTable() {
  const datasets = [
    {
      name: "World Population",
      rows: "7,900,000,000",
      size: "24 MB",
      format: "CSV",
    },
    {
      name: "CO₂ Emissions",
      rows: "195,000",
      size: "8 MB",
      format: "JSON",
    },
    {
      name: "Global Temperature",
      rows: "150,000",
      size: "5 MB",
      format: "Parquet",
    },
  ];

  return (
    <Table>
      <TableCaption>A list of your public datasets.</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead className="font-bold text-base">Dataset</TableHead>
          <TableHead className="font-bold text-base">Rows</TableHead>
          <TableHead className="font-bold text-base">Size</TableHead>
          <TableHead className="font-bold text-base">Format</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {datasets.map((data) => (
          <TableRow key={data.name} className="even:bg-muted/30">
            <TableCell className="font-medium">{data.name}</TableCell>
            <TableCell>{data.rows}</TableCell>
            <TableCell>{data.size}</TableCell>
            <TableCell>{data.format}</TableCell>
          </TableRow>
        ))}
      </TableBody>

      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">3 datasets</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
