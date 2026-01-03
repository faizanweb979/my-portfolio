"use client";
import React from "react";

export default function SkillCard({ title, logo, tags, level, percentage }) {
  return (
    <div className="flex h-full flex-col items-center justify-center p-8 text-white">
      <div className="p-4 rounded-2xl bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
        <img src={logo} alt={title} className="h-60 w-60 object-contain" />
      </div>

      <h3 className="text-5xl font-bold mb-2 text-center leading-tight">{title}</h3>
      <p className="text-6xl text-gray-400 mb-6">{level}</p>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/20 px-3 py-1 text-6xl bg-white/5 backdrop-blur-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-full">
        <div className="flex justify-between text-3xl text-gray-400 mb-2">
          <span>Proficiency</span>
          <span>{percentage}%</span>
        </div>
        <div className="h-6 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full  bg-white rounded-full transition-all duration-1000"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}