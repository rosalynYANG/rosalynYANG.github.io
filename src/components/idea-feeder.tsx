"use client";
import { useState } from "react";
import { Sparkles } from "lucide-react";
import { SheepMark } from "./sheep-mark";
const thoughts = ["长出一个产品", "变成一段故事", "连接一组能力", "先做个小实验"];
export function IdeaFeeder() {
  const [count, setCount] = useState(0); const active = count % thoughts.length;
  return <div className="idea-stage"><div className="idea-halo" aria-hidden="true" /><span className="idea-chip chip-one">AI</span><span className="idea-chip chip-two">FINANCE</span><span className="idea-chip chip-three">IDEA!</span><SheepMark className={count ? "hero-sheep is-fed" : "hero-sheep"} /><button className="feed-button" onClick={() => setCount((value) => value + 1)}><Sparkles size={17} /> 投喂一个灵感</button><p className="feed-result" aria-live="polite">灵感可能会：<strong>{thoughts[active]}</strong></p></div>;
}
