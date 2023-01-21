import { FileBlockProps } from "@githubnext/blocks";
import { useMemo } from "react";
import { AdaptiveCardProvider } from "./AdaptiveCardProvider";

import "./index.css";



export default function (props: FileBlockProps) {
  const { content, metadata } = props;
  
  const data: JSON = useMemo(() => {
    try {
      return JSON.parse(content);
    } catch (e) {
      return null;
    }
  }, [content]);

  return (
    <div className="overflow-y-auto w-full flex-1" data-version="0.1.4">
      <AdaptiveCardProvider payload={data} metadata={metadata} />
    </div>
  );
}