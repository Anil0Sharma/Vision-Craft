"use client";
import { useEffect, useState } from "react";
import { AIOutput } from "@/utils/schema";
import { db } from "@/utils/db";
import { useUser } from "@clerk/nextjs";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { eq, desc } from "drizzle-orm";

export interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

const fetchHistoryByEmail = async (email: string) => {
  const data = await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput.createdBy, email))
    .orderBy(desc(AIOutput.createdAt))
    .execute();
  return data.map((item: any) => ({
    ...item,
    aiResponse: item.aiResponse ?? "",
  }));
};

const HistoryPage = () => {
  const { user } = useUser();
  const [history, setHistory] = useState<HISTORY[]>([]);
  const tabs = ["Template", "AI Response", "Date", "Words", "Action"];

  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      fetchHistoryByEmail(user.primaryEmailAddress.emailAddress).then(
        setHistory
      );
    }
  }, [user]);

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    alert("Copied to clipboard");
  };
  return (
    <div className="p-5">
      <div className="bg-white shadow-md p-5">
        <h2 className="text-2xl">History</h2>
        <p className="text-gray-500 text-sm">
          Search your previously generated AI content
        </p>
      </div>
      <div>
        <div className="p-2 grid grid-cols-3 md:grid-cols-7 bg-gray-300 md:text-sm gap-2 text-xs place-items-stretch">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`uppercase font-bold ${
                index < 2 ? "col-span-1 md:col-span-2" : "col-span-1"
              } ${index >= tabs.length - 2 && "hidden md:block"}`}
            >
              {tab}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {history.length === 0 ? (
            <h5 className="text-center my-2 text-xs text-gray-400">
              No History saved
            </h5>
          ) : (
            history.map((item, index) => (
              <div
                key={index}
                className="p-2 grid grid-cols-3 md:grid-cols-7 md:text-sm gap-4 text-xs border-b"
              >
                <div className="col-span-1 md:col-span-2 uppercase font-bold">
                  {item.templateSlug}
                </div>
                <h2 className="col-span-1 md:col-span-2 line-clamp-2">
                  {item.aiResponse}
                </h2>
                <h2 className="col-span-1">{item.createdAt}</h2>
                <h2 className="hidden md:block col-span-1">
                  {item.aiResponse.length}
                </h2>
                <Button
                  className="flex gap-2"
                  onClick={() => handleCopy(item.aiResponse)}
                >
                  <Copy className="w-4 h-4" /> Copy
                </Button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
