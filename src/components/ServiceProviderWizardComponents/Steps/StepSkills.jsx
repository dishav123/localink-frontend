// ServiceProviderWizard/steps/StepSkills.jsx

import { Plus, Trash2 } from "lucide-react";
import { Field } from "../UI/Field";
import { Input } from "../UI/Input";
import { Select } from "../UI/Select";
import { PillToggle } from "../UI/PillToggle";
import {
  SKILLS_LIST,
  EXPERIENCE_LEVELS,
  AVAILABILITY_OPTIONS,
} from "../Constant";

export function StepSkills({ data, update }) {
  const addExperience = () => {
    const entries = [
      ...(data.experienceEntries || []),
      { title: "", company: "", years: "", desc: "" },
    ];
    update("experienceEntries", entries);
  };

  const removeExperience = (i) => {
    const entries = (data.experienceEntries || []).filter((_, idx) => idx !== i);
    update("experienceEntries", entries);
  };

  const updateEntry = (i, field, val) => {
    const entries = [...(data.experienceEntries || [])];
    entries[i] = { ...entries[i], [field]: val };
    update("experienceEntries", entries);
  };

  const toggleSkill = (skill) => {
    const current = data.selectedSkills || [];
    const next = current.includes(skill)
      ? current.filter((s) => s !== skill)
      : [...current, skill];
    update("selectedSkills", next);
  };

  return (
    <div className="space-y-8">
      {/* Skill tags */}
      <Field label="Skills & Services" required>
        <div className="flex flex-wrap gap-2 mt-1">
          {SKILLS_LIST.map((skill) => {
            const active = (data.selectedSkills || []).includes(skill);
            return (
              <button
                key={skill}
                type="button"
                onClick={() => toggleSkill(skill)}
                className={`px-3 py-1.5 rounded-full text-sm border transition-all duration-200
                  ${
                    active
                      ? "bg-amber-500 border-amber-500 text-white shadow-sm"
                      : "bg-white border-stone-200 text-stone-600 hover:border-amber-300"
                  }`}
              >
                {active && <span className="mr-1">✓</span>}
                {skill}
              </button>
            );
          })}
        </div>
      </Field>

      {/* Primary skill + level */}
      <div className="grid grid-cols-2 gap-4">
        <Field label="Primary Service">
          <Select
            value={data.primarySkill || ""}
            onChange={(e) => update("primarySkill", e.target.value)}
          >
            <option value="">Select primary service</option>
            {SKILLS_LIST.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Experience Level">
          <PillToggle
            options={EXPERIENCE_LEVELS}
            value={data.experienceLevel}
            onChange={(v) => update("experienceLevel", v)}
          />
        </Field>
      </div>

      {/* Total years */}
      <Field label="Total Years of Experience">
        <Input
          type="number"
          min="0"
          max="50"
          value={data.yearsOfExperience || ""}
          onChange={(e) => update("yearsOfExperience", e.target.value)}
          placeholder="e.g. 5"
          className="max-w-[160px]"
        />
      </Field>

      {/* Certifications */}
      <Field label="Certifications (optional)">
        <Input
          value={data.certifications || ""}
          onChange={(e) => update("certifications", e.target.value)}
          placeholder="e.g. NTC Certified Electrician, ISO 9001"
        />
      </Field>

      {/* Work history */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">
            Work History
          </p>
          <button
            type="button"
            onClick={addExperience}
            className="flex items-center gap-1.5 text-xs font-semibold text-amber-600 hover:text-amber-700 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" /> Add Entry
          </button>
        </div>
        {(data.experienceEntries || []).map((entry, i) => (
          <div
            key={i}
            className="relative bg-stone-50 rounded-2xl border border-stone-200 p-4 space-y-3"
          >
            <button
              type="button"
              onClick={() => removeExperience(i)}
              className="absolute top-3 right-3 p-1 rounded-lg hover:bg-stone-200 text-stone-400 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
            <div className="grid grid-cols-2 gap-3">
              <Input
                placeholder="Job title"
                value={entry.title}
                onChange={(e) => updateEntry(i, "title", e.target.value)}
              />
              <Input
                placeholder="Company / Employer"
                value={entry.company}
                onChange={(e) => updateEntry(i, "company", e.target.value)}
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <Input
                type="number"
                placeholder="Years"
                value={entry.years}
                onChange={(e) => updateEntry(i, "years", e.target.value)}
              />
              <div className="col-span-2">
                <Input
                  placeholder="Brief description"
                  value={entry.desc}
                  onChange={(e) => updateEntry(i, "desc", e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}
        {(data.experienceEntries || []).length === 0 && (
          <div className="text-center py-6 text-stone-400 text-sm border-2 border-dashed border-stone-200 rounded-2xl">
            No entries yet — click "Add Entry" to start
          </div>
        )}
      </div>

      {/* Hourly rate */}
      <div className="grid grid-cols-2 gap-4">
        <Field label="Expected Hourly Rate (NPR)">
          <Input
            type="number"
            min="0"
            value={data.hourlyRate || ""}
            onChange={(e) => update("hourlyRate", e.target.value)}
            placeholder="e.g. 500"
          />
        </Field>
        <Field label="Availability">
          <PillToggle
            options={AVAILABILITY_OPTIONS}
            value={data.availability}
            onChange={(v) => update("availability", v)}
          />
        </Field>
      </div>
    </div>
  );
}