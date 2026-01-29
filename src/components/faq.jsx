"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const FaqSection = React.forwardRef(
  ({ className, title, description, category, items = [], contactInfo, ...props }, ref) => {
    if (!items.length) return null;

    return (
      <section
        ref={ref}
        className={cn(
          "py-20 w-full bg-[#01070f]",
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-gray-400 text-lg">
                {description}
              </p>
            )}
          </motion.div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto">
            {/* Category Title */}
            {category && (
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2 w-fit cursor-pointer transition-transform duration-500 ease-in-out hover:translate-x-4">
                  <span className="h-[2px] w-4 bg-white inline-block"></span>
                  {category}
                </h3>
              </div>
            )}

            {items.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                index={index}
              />
            ))}
          </div>

          {/* Contact Section */}
          {contactInfo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-md mx-auto mt-16 text-center"
            >
              <p className="text-gray-400 mb-6">
                {contactInfo.description}
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8" onClick={contactInfo.onContact}>
                {contactInfo.buttonText}
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    );
  }
);
FaqSection.displayName = "FaqSection";

// Internal FAQ Item
import { MoveRight } from "lucide-react";

const FaqItem = React.forwardRef(({ question, answer, index }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      className="border-b border-white/10"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between group text-left"
      >
        <h3
          className={cn(
            "text-lg md:text-xl font-medium transition-colors duration-200 pr-8",
            isOpen ? "text-white" : "text-gray-300 group-hover:text-white"
          )}
        >
          {question}
        </h3>

        {/* Arrow Icon in Circle */}
        <div className={cn(
          "h-10 w-10 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0",
          isOpen
            ? "border-blue-500 bg-blue-500/10 text-blue-500 rotate-90"
            : "border-white/10 text-gray-500 group-hover:border-white/30 group-hover:text-white"
        )}>
          <MoveRight className="h-5 w-5" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
          >
            <div className="pb-8 text-gray-400 leading-relaxed text-base md:text-lg max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});
FaqItem.displayName = "FaqItem";

export { FaqSection };
