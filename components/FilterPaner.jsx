"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";

const FilterPaner = () => {
  const [sortBy, setSortBy] = useState("random");
  const [filter, setFilter] = useState("all");
  return (
    <div className="flex pb-6 border-b  mt-3 justify-between items-center gap-3 px-1  ">
      <div className="hidden sm:block max-w-1/3">
        <h2 className=" border-b pb-2 text-xl font-semibold text-primary tracking-tight first:mt-0">
          Avalible DataSet
        </h2>
        <p className="leading-7  text-gray-600">
          <span className="font-medium text-primary">10</span> / 69 Records
        </p>
      </div>
      <div className="flex justify-between sm:justify-end w-full sm:flex-row gap-3">
        <div className="flex items-center justify-start sm:justify-start gap-2 w-full sm:w-auto">
          <label className="text-sm text-muted-foreground">Sort by:</label>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[100px] sm:w-[140px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Options</SelectLabel>
                <SelectItem value="random">Random</SelectItem>
                <SelectItem value="name">Name (A–Z)</SelectItem>
                <SelectItem value="date">Date Added</SelectItem>
                <SelectItem value="size">Size</SelectItem>
                <SelectItem value="popularity">Popularity</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-start sm:justify-start gap-2 sm:w-auto">
          <label className="text-sm text-muted-foreground">Filter:</label>
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[100px] sm:w-[140px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Show</SelectLabel>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="public">Public</SelectItem>
                <SelectItem value="private">Private</SelectItem>
                <SelectItem value="favorites">Favorites</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FilterPaner;
