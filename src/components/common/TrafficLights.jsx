import React from "react";

export function TrafficLights() {
  return (
    <div className="flex gap-1.5">
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F56" }} />
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FFBD2E" }} />
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#27C93F" }} />
    </div>
  );
}
