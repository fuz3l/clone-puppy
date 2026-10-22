"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { puppies } from "@/data/puppies";
import { filterPuppies } from "@/lib/filterPuppies";
import FilterCard from "@/components/sections/FilterCard";
import PuppyGrid from "@/components/sections/PuppyGrid";

/**
 * PuppiesDirectory client coordinator.
 * Reads URL search parameters, executes filterPuppies filtering,
 * and passes matching puppies to FilterCard and PuppyGrid.
 */
export default function PuppiesDirectory() {
  const searchParams = useSearchParams();

  const activeFilters = useMemo(() => {
    return {
      origin: searchParams.get("origin") || "",
      breed: searchParams.get("breed") || "",
      gender: searchParams.get("gender") || "",
      status: "available",
    };
  }, [searchParams]);

  const filteredPuppies = useMemo(() => {
    return filterPuppies(puppies, activeFilters);
  }, [activeFilters]);

  return (
    <>
      <FilterCard totalMatches={filteredPuppies.length} />
      <PuppyGrid puppies={filteredPuppies} />
    </>
  );
}
