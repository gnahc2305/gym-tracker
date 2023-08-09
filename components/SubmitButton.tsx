"use client";

import React from "react";
import { useState } from "react";

function SubmitButton() {
  const [isLoading, setIsLoading] = useState(false);
  function submitButton() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }
  return (
    <button className="bg-[#10B981] p-1 rounded-md" onClick={submitButton}>
      {isLoading ? "Loading..." : "Submit"}
    </button>
  );
}

export default SubmitButton;
