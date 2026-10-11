"use client";

import { createContext, ReactNode, useState } from "react";

interface SearchContextProps {
  searchString: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
}

export const searchContext = createContext<SearchContextProps>({
  searchString: "",
  setSearchString: () => {},
});

function Context({ children }: { children: ReactNode }) {
  const [searchString, setSearchString] = useState("");

  return (
    <searchContext.Provider value={{ searchString, setSearchString }}>
      {children}
    </searchContext.Provider>
  );
}

export default Context;