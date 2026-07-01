"use client";

import { getHistory } from "@/lib/history/storage";
import { useEffect, useState } from "react";

import HistoryHeader from "@/components/history/history-header";
import HistorySearch from "@/components/history/history-search";
import HistoryFilter from "@/components/history/history-filter";
import HistoryCard from "@/components/history/history-card";
import HistoryStats from "@/components/history/history-stats";
import HistoryEmpty from "@/components/history/history-empty";


import { HistoryItem } from "@/lib/history/types";


export default function HistoryPage() {

  const [search, setSearch] = useState("");

  const [risk, setRisk] = useState("ALL");

  const [history, setHistory] = useState<HistoryItem[]>([]);

   useEffect(() => {
    setHistory(getHistory());
  }, []);

const filtered = history.filter((item) => {

    const keyword = search.toLowerCase();

    const token = (item.token ?? "").toLowerCase();
const symbol = (item.symbol ?? "").toLowerCase();
const target = (item.target ?? "").toLowerCase();

const matchSearch =
  token.includes(keyword) ||
  symbol.includes(keyword) ||
  target.includes(keyword);

    const matchRisk =
      risk === "ALL" ||
      item.risk === risk;

    return matchSearch && matchRisk;

  });

  return (

    <main className="p-6">

      <HistoryHeader />

<HistoryStats
  total={history.length}
  low={history.filter(item => item.risk === "LOW").length}
  medium={history.filter(item => item.risk === "MEDIUM").length}
  high={history.filter(item => item.risk === "HIGH").length}
/>


      <div className="mt-10 space-y-5">

        <HistorySearch
          value={search}
          onChange={setSearch}

        />

        <HistoryFilter
          risk={risk}
          onChange={setRisk}
        />

      </div>

      <div className="mt-8 space-y-5">

        {filtered.length === 0 ? (

        <HistoryEmpty />

        ) : (

          filtered.map((item) => (

            <HistoryCard
              key={item.id}
              item={item}
            />

          ))

        )}

      </div>

    </main>

  );

}