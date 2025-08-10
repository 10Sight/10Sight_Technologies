"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const FaqSection = React.forwardRef(
  ({ className, title, description, items = [], contactInfo, ...props }, ref) => {
    if (!items.length) return null;

    return (
      <section
        ref={ref}
        className={cn(
          "py-10 sm:py-14 lg:py-16 w-full bg-white from-transparent via-muted/50 to-transparent",
          className
        )}
        {...props}
      >
        <div className="container px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-8 sm:mb-12"
          >
            <h2 className="text-4xl font-bold sm:text-3xl lg:text-4xl mb-3 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
              {title}
            </h2>
            {description && (
              <p className="text-sm sm:text-base text-muted-foreground">
                {description}
              </p>
            )}
          </motion.div>

          {/* FAQ Items */}
          <div className="max-w-3xl mx-auto space-y-2">
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
              className="max-w-md mx-auto mt-10 sm:mt-12 p-4 sm:p-6 rounded-lg text-center bg-card shadow"
            >
              <div className="inline-flex items-center justify-center p-1.5 rounded-full mb-4 bg-muted">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <p className="text-sm sm:text-base font-medium text-foreground mb-1">
                {contactInfo.title}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                {contactInfo.description}
              </p>
              <Button size="sm" className="text-sm sm:text-base px-4 py-2" onClick={contactInfo.onContact}>
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
const FaqItem = React.forwardRef(({ question, answer, index }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      className={cn(
        "group rounded-lg border border-border/50 transition-all duration-200 ease-in-out",
        isOpen
          ? "bg-gradient-to-br from-background via-muted/50 to-background"
          : "hover:bg-muted/50"
      )}
    >
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 sm:px-6 py-3 sm:py-4 h-auto justify-between hover:bg-transparent gap-2"
      >
        <h3
          className={cn(
            "text-sm sm:text-base lg:text-lg font-medium text-left transition-colors duration-200",
            "text-foreground/70",
            "break-words whitespace-normal flex-1", // ✅ wrapping fix
            isOpen && "text-foreground"
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            "p-0.5 rounded-full flex-shrink-0 transition-colors duration-200",
            isOpen ? "text-primary" : "text-muted-foreground"
          )}
        >
          <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
        </motion.div>
      </Button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
          >
            <div className="px-4 sm:px-6 pb-4 pt-2">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});
FaqItem.displayName = "FaqItem";

export { FaqSection };
