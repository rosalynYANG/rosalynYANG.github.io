import { cn } from "@/lib/utils";

export function SheepMark({ className }: { className?: string }) {
  return <svg className={cn("sheep-mark", className)} viewBox="0 0 96 96" role="img" aria-label="小样儿羊形标记"><path className="wool" d="M28 76c-12 0-19-8-17-18-8-7-5-20 6-23-2-12 11-20 21-14 7-11 24-8 26 4 13-2 21 10 15 20 10 7 6 22-6 24-4 11-17 15-25 8-8 7-22 5-26-5-7 5-18 4-20-3Z" /><path className="face" d="M29 47c1-12 9-20 19-20s18 8 19 20c1 16-7 29-19 29S28 63 29 47Z" /><path className="ear" d="M30 43c-8-7-15-4-15 3 1 8 11 10 16 4M66 43c8-7 15-4 15 3-1 8-11 10-16 4" /><circle cx="39" cy="51" r="2.8" /><circle cx="57" cy="51" r="2.8" /><path className="mouth" d="m44 61 4 3 4-3M48 64v5m0 0-5-3m5 3 5-3" /></svg>;
}
