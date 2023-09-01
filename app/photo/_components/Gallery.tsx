import React from "react";
import Link from "next/link";

export default function Gallery() {
  return (
    <div className="grid  grid-rows-4 sm:grid-cols-1">
      <div >
        <h3>Photo 1</h3>
        <p>heres a pretty large amount of text an whatnot</p>
      </div>
      <div>
        <h3>Photo 2</h3>
      </div>
      <div>
        <h3>Photo 3</h3>
      </div>
    </div>
  );
}
