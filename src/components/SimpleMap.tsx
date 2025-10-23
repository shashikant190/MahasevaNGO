import React, { useEffect, useRef } from "react";

type Props = {
  center?: [number, number];
  zoom?: number;
};

const SimpleMap: React.FC<Props> = ({ center = [18.13, 74.48], zoom = 10 }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<unknown>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // ensure leaflet CSS is loaded from CDN
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    let mounted = true;

    // dynamic import to avoid compile-time dependency
  
  import("leaflet")
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((LModule: any) => {
        if (!mounted) return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const L = (LModule as any).default || (LModule as any);

        // create map only once
        if (containerRef.current && !mapRef.current) {
          const map = L.map(containerRef.current).setView(center, zoom);
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }).addTo(map);

          L.marker(center).addTo(map).bindPopup("Mahaseva Sahayog Foundation - Phaltan");
          mapRef.current = map;
        }
      })
      .catch((err) => {
        // If leaflet isn't installed, fail gracefully in UI (no map)
        // console.warn("Leaflet not available:", err);
      });

    return () => {
      mounted = false;
      if (mapRef.current) {
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (mapRef.current as any).remove();
        } catch (e) {
          /* ignore */
        }
        mapRef.current = null;
      }
    };
  }, [center, zoom]);

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default SimpleMap;
