import {
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
  parseAsStringLiteral,
  useQueryState,
  useQueryStates,
} from "nuqs";
import { useCallback } from "react";

// Define the search filter types
export interface SearchFilters {
  sortBy: string;
  sortOrder: "asc" | "desc";
  companyName: string;
  domain: string;
  search: string;
  contactName: string;
  jobTitle: string;
  location: string[];
  industry: string[];
  employeeSize: string[];
  departments: string[];
  seniority: string[];
  zipCode: string;
  country: string[];
  state: string[];
  city: string[];
  linkedinUrl: string;
  industryType: string[];
  companySize: string[];
  page: number;
  limit: number;
}

export type SearchType = "companies" | "contacts" | "favorites";

export const useSearchFilter = () => {
  const [searchFilters, setSearchFilters] = useQueryStates({
    sortBy: parseAsString.withDefault("updatedAt"),
    sortOrder: parseAsStringLiteral(["asc", "desc"]).withDefault("desc"),
    companyName: parseAsString.withDefault(""),
    domain: parseAsString.withDefault(""),
    search: parseAsString.withDefault(""),
    contactName: parseAsString.withDefault(""),
    jobTitle: parseAsString.withDefault(""),
    location: parseAsArrayOf(parseAsString).withDefault([]),
    industry: parseAsArrayOf(parseAsString).withDefault([]),
    employeeSize: parseAsArrayOf(parseAsString).withDefault([]),
    departments: parseAsArrayOf(parseAsString).withDefault([]),
    seniority: parseAsArrayOf(parseAsString).withDefault([]),
    zipCode: parseAsString.withDefault(""),
    country: parseAsArrayOf(parseAsString).withDefault([]),
    state: parseAsArrayOf(parseAsString).withDefault([]),
    city: parseAsArrayOf(parseAsString).withDefault([]),
    linkedinUrl: parseAsString.withDefault(""),
    industryType: parseAsArrayOf(parseAsString).withDefault([]),
    companySize: parseAsArrayOf(parseAsString).withDefault([]),
    page: parseAsInteger.withDefault(1),
    limit: parseAsInteger.withDefault(10),
  });

  const [searchType, setSearchType] = useQueryState(
    "searchType",
    parseAsStringLiteral(["companies", "contacts", "favorites"]).withDefault(
      "contacts"
    )
  );

  // Helper methods for filter management
  const setFilter = useCallback(
    (key: keyof SearchFilters, value: any) => {
      setSearchFilters((prev) => ({
        ...prev,
        page: 1, // Reset to page 1 when changing filters
        [key]: value,
      }));
    },
    [setSearchFilters]
  );

  const clearFilters = useCallback(() => {
    setSearchFilters({
      companyName: "",
      domain: "",
      search: "",
      contactName: "",
      jobTitle: "",
      location: [],
      industry: [],
      employeeSize: [],
      departments: [],
      seniority: [],
      zipCode: "",
      country: [],
      state: [],
      city: [],
      linkedinUrl: "",
      industryType: [],
      companySize: [],
      page: 1,
      limit: 10,
      sortBy: "updatedAt",
      sortOrder: "desc",
    });
  }, [setSearchFilters]);

  const setSearchParams = useCallback(
    (params: Partial<SearchFilters>) => {
      setSearchFilters((prev: SearchFilters) => ({
        ...prev,
        page: 1, // Reset to page 1 when changing search params
        ...params,
      }));
    },
    [setSearchFilters]
  );

  return {
    searchFilters,
    setSearchFilters,
    searchType,
    setSearchType,
    setFilter,
    clearFilters,
    setSearchParams,
  };
};
