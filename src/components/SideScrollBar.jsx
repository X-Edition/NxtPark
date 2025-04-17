import React, { useEffect, useRef, useState } from "react";

export default function SideScrollBar({ items }) {
  const scrollRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const scrollSpeed = 0.5;

  const extendedItems = [...items, ...items]; // duplicate once for seamless loop

  // Auto-scroll + loop
  useEffect(() => {
    if (!scrollRef.current) return;
    let frameId;

    const scroll = () => {
      if (!isInteracting && scrollRef.current) {
        scrollRef.current.scrollLeft += scrollSpeed;

        // Reset scroll when halfway through (i.e., at original length)
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth / 2
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      frameId = requestAnimationFrame(scroll);
    };

    frameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frameId);
  }, [isInteracting]);

  // Drag scroll
  useEffect(() => {
    const container = scrollRef.current;
    let isDown = false;
    let startX, scrollLeft;

    const onMouseDown = (e) => {
      isDown = true;
      setIsInteracting(true);
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const onMouseLeave = () => (isDown = false);
    const onMouseUp = () => {
      isDown = false;
      setTimeout(() => setIsInteracting(false), 1000);
    };

    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener("mousedown", onMouseDown);
    container.addEventListener("mouseleave", onMouseLeave);
    container.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousemove", onMouseMove);

    return () => {
      container.removeEventListener("mousedown", onMouseDown);
      container.removeEventListener("mouseleave", onMouseLeave);
      container.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
    ref={scrollRef}
    style={{
        overflowX: "auto",
        whiteSpace: "nowrap",
        padding: "20px 0",
        cursor: "grab",
        width: "100%",
        maxWidth: "100vw",
        boxSizing: "border-box",
        scrollbarWidth: "none",          // Firefox
        msOverflowStyle: "none"          // IE 10+
    }}
    >
    {extendedItems.map((item, index) => (
    <div
        key={index}
        style={{
        display: "inline-block",
        width: "280px",
        height: "340px",
        backgroundColor: "#111",
        borderLeft: index !== 0 ? "1px solid #222" : "none",
        boxShadow: "0 0 0 rgba(0,0,0,0)", // no shadow between cards
        overflow: "hidden",
        transition: "transform 0.3s ease",
        verticalAlign: "top",
        userSelect: "none",
        cursor: "pointer"
        }}
        onClick={() => setIsInteracting(true)}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.01)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
        <div style={{ width: "100%", height: "160px", overflow: "hidden" }}>
        <img
            src={item.image}
            alt={item.title}
            style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
            }}
        />
        </div>

        <div style={{ padding: "16px", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "calc(100% - 160px)" }}>
        <div>
            <h3 style={{
            fontSize: "16px",
            color: "#b280ff",
            marginBottom: "8px",
            fontWeight: "600"
            }}>
            {item.title}
            </h3>
            <p style={{
            fontSize: "13px",
            color: "#ccc",
            marginBottom: "12px",
            lineHeight: "1.5"
            }}>
            {item.description}
            </p>
        </div>

        <div style={{
            fontSize: "12px",
            color: "#888",
            borderTop: "1px solid #222",
            paddingTop: "8px"
        }}>
            NxtPark Event · 2025
        </div>
        </div>
    </div>
    ))}


    </div>
  );
}