"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import "./project-footer.css";

export default function ProjectFooter({ backHref }: { backHref: string }) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <>
      <footer className="project-footer">
        <Link href={backHref} className="project-footer-action">
          <ArrowLeft aria-hidden="true" />
          返回上一级
        </Link>
        <button className="project-footer-action" type="button" onClick={() => setOpen(true)}>
          联系小样儿
          <ArrowRight aria-hidden="true" />
        </button>
      </footer>

      {open && (
        <div className="contact-card-layer" role="presentation" onMouseDown={() => setOpen(false)}>
          <section
            className="contact-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="contact-card-close" type="button" onClick={() => setOpen(false)} aria-label="关闭联系卡片">
              <X aria-hidden="true" />
            </button>
            <div className="contact-card-copy">
              <p>YOUNGSHEEP · CREATIVE &amp; AI LAB</p>
              <h2 id={titleId}>联系小样儿</h2>
              <span>聊 AI 产品、金融科技，或值得一起养大的创意。</span>
              <a href="mailto:dhu_rosalyn@sina.com">dhu_rosalyn@sina.com</a>
            </div>
            <figure>
              <Image
                src="/world-door/assets/wechat-official-account.jpg"
                alt="小样儿个人微信公众号二维码"
                width={1280}
                height={1280}
              />
              <figcaption>微信扫码关注个人公众号</figcaption>
            </figure>
          </section>
        </div>
      )}
    </>
  );
}
