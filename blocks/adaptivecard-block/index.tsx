import { FileBlockProps, getLanguageFromFilename } from "@githubnext/blocks";
import { Button, Box } from "@primer/react";
import { AdaptiveCardProvider } from "./AdaptiveCardProvider";

import "./index.css";



export default function (props: FileBlockProps) {
  const { context, content, metadata, onUpdateMetadata } = props;
  
  return (
    <div className="overflow-y-auto w-full flex-1">
      <AdaptiveCardProvider content={content} />
    </div>
  );
}