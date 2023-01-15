import { FileBlockProps, getLanguageFromFilename } from "@githubnext/blocks";
import { Button, Box } from "@primer/react";
import { AdaptiveCardProvider } from "./AdaptiveCardProvider";

import "./index.css";



export default function (props: FileBlockProps) {
  const { context, content, metadata, onUpdateMetadata } = props;
  
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >

      <AdaptiveCardProvider content={content} />
    </div>

  );
}