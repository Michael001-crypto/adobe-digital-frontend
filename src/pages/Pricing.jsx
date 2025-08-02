// src/pages/Pricing.jsx
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$9",
    frequency: "/month",
    features: [
      "Access to basic templates",
      "Community support",
      "Free updates",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$29",
    frequency: "/month",
    features: [
      "Everything in Starter",
      "Unlimited downloads",
      "Premium templates",
      "Email support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    frequency: "",
    features: [
      "Custom solutions",
      "Team collaboration tools",
      "Priority support",
      "Dedicated manager",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  const navigate = useNavigate();

  const handleButtonClick = (plan) => {
    if (plan === "Enterprise") {
      navigate("/contact");
    } else {
      navigate(`/signup?plan=${plan.toLowerCase()}`);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 dark:text-white"
        >
          Choose Your Plan
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Flexible pricing for individuals and businesses of all sizes.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className={`rounded-2xl p-8 shadow-lg transition-transform duration-300 ${
              plan.highlighted
                ? "bg-indigo-600 text-white scale-105"
                : "bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <p className="text-4xl font-extrabold">
              {plan.price}{" "}
              <span className="text-base font-normal">{plan.frequency}</span>
            </p>
            <ul className="mt-6 space-y-3 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleButtonClick(plan.name)}
              className={`mt-6 w-full py-2 rounded-xl font-semibold transition ${
                plan.highlighted
                  ? "bg-white text-indigo-600 hover:bg-gray-100"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              {plan.price === "Custom" ? "Contact Us" : "Get Started"}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
