"use client";

import { useEffect, useRef, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import BorderGlow from "./BorderGlow";
import styles from "./MicrosoftStorageModal.module.css";

type Project = {
  no: string;
  name: string;
  type: string;
  role: string;
  result: string;
  theme: string;
  label: string;
  cover: string;
};

const projectImages = [1, 2, 3, 4, 5, 6];

export default function MicrosoftStorageModal({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      triggerRef.current?.focus();
    };
  }, [open]);

  const openModal = () => setOpen(true);

  return (
    <>
      <article
        ref={triggerRef}
        className={`project ${project.theme} ${styles.trigger}`}
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        onClick={openModal}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openModal();
          }
        }}
      >
        <BorderGlow
          className="projectGlow"
          edgeSensitivity={24}
          glowColor="199 48 74"
          backgroundColor="#111313"
          borderRadius={18}
          glowRadius={34}
          glowIntensity={0.85}
          coneSpread={22}
          fillOpacity={0.28}
          colors={["#f47b43", "#9fc7d9", "#9b8cff"]}
        >
          <div className="projectVisual">
            <img className="projectCover" src={project.cover} alt={`${project.name} project cover`} />
            <span className="projectArrow" aria-hidden="true">↗</span>
          </div>
        </BorderGlow>
        <div className="projectInfo">
          <span>{project.no}</span>
          <div>
            <h3>{project.name} — {project.label}</h3>
            <div className="projectTags"><i>{project.type}</i><i>{project.role}</i><i>{project.result}</i></div>
          </div>
        </div>
      </article>

      {open && (
        <div className={styles.overlay} onMouseDown={() => setOpen(false)}>
          <section
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="microsoft-storage-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button ref={closeRef} className={styles.close} type="button" onClick={() => setOpen(false)} aria-label="Close project details">
              <XMarkIcon aria-hidden="true" />
            </button>

            <header className={styles.intro}>
              <div className={styles.introTop}>
                <span>MICROSOFT · WORKPLACE SERVICE</span>
                <span>UI / UX DESIGN · LARGE TOUCH DISPLAY</span>
              </div>
              <h2 id="microsoft-storage-title" className="editorialTitle">
                <span className="editorialLeadLine">Microsoft Storage Cabinet</span>
                <span className="editorialLine">Smart Cabinet Design</span>
              </h2>
              <p className={styles.lead}>A calm, approachable smart-cabinet experience designed for Microsoft&apos;s internal workplace.</p>
              <div className={styles.summary}>
                <p>项目围绕企业内部物品流转，将借物、还物、维修与离职交接四类场景收束为清晰的大屏触控流程。</p>
                <p>设计以微软办公生态为视觉基础，通过更大的触控目标、即时的状态反馈和轻盈的蓝白视觉，降低员工在公共设备上的理解与操作成本，让一套功能简单的内部系统也能拥有舒适、可信赖的使用体验。</p>
              </div>
            </header>

            <div className={styles.media}>
              {projectImages.map((image) => (
                <img
                  key={image}
                  src={`/projects/microsoft-storage-cabinet/${image}.png`}
                  alt={`Microsoft Storage Cabinet project presentation ${image}`}
                  loading={image === 1 ? "eager" : "lazy"}
                />
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
