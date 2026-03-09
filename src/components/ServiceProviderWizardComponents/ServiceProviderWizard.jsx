// ServiceProviderWizard/ServiceProviderWizard.jsx

import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, CheckCircle2, Star } from "lucide-react";
import { useWizardForm } from "./useWizardForm";
import { STEPS } from "./Constant";
import { StepPersonal } from "./Steps/StepPersonal";
import { StepSkills } from "./Steps/StepSkills";
import { StepVerification } from "./Steps/StepVerification";
import { StepTerms } from "./Steps/StepTerms";

export default function ServiceProviderWizard() {
  const {
    step,
    form,
    errors,
    submitted,
    updateField,
    nextStep,
    prevStep,
    canSubmit,
    handleSubmit,
  } = useWizardForm();

  const progress = ((step - 1) / (STEPS.length - 1)) * 100;

  // Success screen after submission
  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-stone-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl shadow-xl p-12 max-w-md w-full text-center space-y-5">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-stone-900">You're all set!</h2>
          <p className="text-stone-500 text-sm leading-relaxed">
            Your application has been submitted. Our team will review your details
            and reach out within 1–2 business days.
          </p>
          <div className="pt-2">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-xs font-semibold px-4 py-2 rounded-full">
              <Star className="w-3.5 h-3.5 fill-amber-500" />
              Application under review
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-amber-50/40 to-stone-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur border-b border-stone-200 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-stone-900 leading-tight">
              Service Provider
            </h1>
            <p className="text-xs text-stone-400 font-medium">Onboarding</p>
          </div>
          <div className="text-sm font-semibold text-stone-500">
            Step {step} <span className="text-stone-300">/</span> {STEPS.length}
          </div>
        </div>

        {/* Step navigator */}
        <div className="max-w-4xl mx-auto px-6 pb-5 pt-1">
          <div className="flex items-center gap-0">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              const done = step > s.id;
              const active = step === s.id;
              return (
                <div
                  key={s.id}
                  className="flex items-center"
                  style={{ flex: i < STEPS.length - 1 ? "1" : "0" }}
                >
                  <div className="flex flex-col items-center gap-1.5">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
                      ${
                        done
                          ? "bg-amber-500 border-amber-500 shadow-md shadow-amber-200"
                          : active
                          ? "bg-white border-amber-500 shadow-md shadow-amber-100"
                          : "bg-white border-stone-200"
                      }`}
                    >
                      {done ? (
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      ) : (
                        <Icon
                          className={`w-4.5 h-4.5 ${
                            active ? "text-amber-600" : "text-stone-400"
                          }`}
                          style={{ width: 18, height: 18 }}
                        />
                      )}
                    </div>
                    <span
                      className={`text-[10px] font-semibold whitespace-nowrap hidden sm:block
                      ${
                        active
                          ? "text-amber-600"
                          : done
                          ? "text-amber-500"
                          : "text-stone-400"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div
                      className="flex-1 mx-2 h-0.5 bg-stone-200 relative"
                      style={{ marginTop: "-18px" }}
                    >
                      <div
                        className="absolute inset-y-0 left-0 bg-amber-400 transition-all duration-500"
                        style={{ width: done ? "100%" : "0%" }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Thin progress bar */}
        <div className="h-0.5 bg-stone-100">
          <div
            className="h-full bg-amber-400 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="mb-6">
              <h2 className="serif text-2xl font-bold text-stone-900">
                {STEPS[step - 1].label}
              </h2>
              <p className="text-sm text-stone-400 mt-1">{STEPS[step - 1].sub}</p>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-stone-100 p-7">
              {step === 1 && (
                <StepPersonal data={form} update={updateField} errors={errors} />
              )}
              {step === 2 && <StepSkills data={form} update={updateField} />}
              {step === 3 && <StepVerification data={form} update={updateField} />}
              {step === 4 && <StepTerms data={form} update={updateField} />}
            </div>

            {/* Nav buttons */}
            <div className="flex items-center justify-between mt-6">
              <button
                type="button"
                onClick={prevStep}
                disabled={step === 1}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all
                  ${
                    step === 1
                      ? "text-stone-300 cursor-not-allowed"
                      : "text-stone-600 hover:bg-stone-100 active:scale-95"
                  }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>

              <div className="flex items-center gap-2">
                {STEPS.map((s) => (
                  <div
                    key={s.id}
                    className={`rounded-full transition-all duration-300
                    ${
                      step === s.id
                        ? "w-6 h-2 bg-amber-500"
                        : step > s.id
                        ? "w-2 h-2 bg-amber-300"
                        : "w-2 h-2 bg-stone-200"
                    }`}
                  />
                ))}
              </div>

              {step < STEPS.length ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center gap-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-sm font-semibold shadow-md shadow-amber-200 transition-all duration-200 active:scale-95"
                >
                  Continue
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  disabled={!canSubmit}
                  onClick={handleSubmit}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95
                    ${
                      canSubmit
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-200"
                        : "bg-stone-200 text-stone-400 cursor-not-allowed"
                    }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Submit Application
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}