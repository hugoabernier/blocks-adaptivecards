import { FileBlockProps } from "@githubnext/blocks";
import { useMemo } from "react";
import { AdaptiveCardProvider } from "./AdaptiveCardProvider";

import "./index.css";



export default function (props: FileBlockProps) {
  const { context, content, metadata, onUpdateMetadata } = props;
  
  const data: JSON = useMemo(() => {
    try {
      return JSON.parse(content);
    } catch (e) {
      return null;
    }
  }, [content]);

  return (
    <div className="overflow-y-auto w-full flex-1">
      <AdaptiveCardProvider payload={data} />
    </div>
  );
}