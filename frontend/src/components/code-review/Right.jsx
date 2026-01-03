import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useCodeReviewStore } from "../../store/useCodeReviewStore";

const Right = () => {
  const { reviewResponse, responseLoading } = useCodeReviewStore();

  return (
    <div className="flex-1 border h-[85%] rounded-md p-2 bg-slate-900 overflow-y-auto text-gray-200">

      {responseLoading ? (
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white" />
        </div>
      ) : (
        <div className="prose prose-invert max-w-none">
          <Markdown remarkPlugins={[remarkGfm]}>
            {String(reviewResponse || "Click review")}
          </Markdown>
        </div>
      )}

    </div>
  );
};

export default Right;
