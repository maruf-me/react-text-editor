"use client";

import { useState } from "react";
import AllExamples, { BasicExample } from "../components/basic-usage";
import AdvancedEditor from "../../../src";
import { MORE_ADVANCE } from "../../../src/variants";

export default function Home() {
  const [content, setContent] = useState("");
  console.log({ content });
  return (
    <div className="bg-slate-100 min-h-screen p-8 text-black">
      <AdvancedEditor
        height="400px"
        placeholder="Start typing..."
        defaultValue={content ?? ""}
        onChange={setContent}
        variant="custom"
        buttonList={MORE_ADVANCE}
      />
      {/* <BasicExample /> */}
      <AllExamples />
    </div>
  );
}
