"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Coffee,
  Utensils,
  Moon,
  Cookie,
  Clock,
  Apple,
  Milk,
  Banana,
  Beef,
  Carrot,
} from "lucide-react";

const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
const today = days[new Date().getDay()];
const MealPlanApp = () => {
  const [selectedDay, setSelectedDay] = useState(today);
  const [activeTab, setActiveTab] = useState("meals");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  const mealPlan = {
    monday: {
      breakfast: {
        time: "7:00 AM",
        menu: "Scrambled eggs with whole-grain bread and a cup of coffee",
        calories: "420 kcal",
      },
      lunch: {
        time: "12:30 PM",
        menu: "Jollof rice with chicken and a side of steamed vegetables (e.g., broccoli and carrots)",
        calories: "650 kcal",
      },
      dinner: {
        time: "8:00 PM",
        menu: "Boiled potatoes with eggs and a side of mixed greens (e.g., arugula and spinach)",
        calories: "480 kcal",
      },
    },
    tuesday: {
      breakfast: {
        time: "7:00 AM",
        menu: "Fried plantain, eggs, and a small avocado slice",
        calories: "450 kcal",
      },
      lunch: {
        time: "12:30 PM",
        menu: "Spaghetti stir-fry with beef, carrots, and green beans",
        calories: "620 kcal",
      },
      dinner: {
        time: "8:00 PM",
        menu: "Fried rice with chicken and a side of steamed vegetables (e.g., zucchini and carrots)",
        calories: "580 kcal",
      },
    },
    wednesday: {
      breakfast: {
        time: "7:00 AM",
        menu: "Noodles with boiled eggs",
        calories: "440 kcal",
      },
      lunch: {
        time: "12:30 PM",
        menu: "Fried rice with chicken, peas, carrots, and a side of coleslaw",
        calories: "680 kcal",
      },
      dinner: {
        time: "8:00 PM",
        menu: "Spaghetti and tomato sauce with beef",
        calories: "520 kcal",
      },
    },
    thursday: {
      breakfast: {
        time: "7:00 AM",
        menu: "Whole-grain toast with peanut butter and a cup of coffee",
        calories: "380 kcal",
      },
      lunch: {
        time: "12:30 PM",
        menu: "Macaroni with tomato sauce, beef, and spinach",
        calories: "600 kcal",
      },
      dinner: {
        time: "8:00 PM",
        menu: "Rice and tomato sauce with beef and a side of coleslaw",
        calories: "550 kcal",
      },
    },
    friday: {
      breakfast: {
        time: "7:00 AM",
        menu: "Potato and egg stir-fry with a side of steamed vegetables",
        calories: "420 kcal",
      },
      lunch: {
        time: "12:30 PM",
        menu: "Rice with bell pepper sauce, chicken, and a side of cucumber salad",
        calories: "580 kcal",
      },
      dinner: {
        time: "8:00 PM",
        menu: "Macaroni stir-fry with mixed vegetables and a small side salad",
        calories: "500 kcal",
      },
    },
    saturday: {
      breakfast: {
        time: "7:00 AM",
        menu: "Pancakes with honey and fresh fruit",
        calories: "460 kcal",
      },
      lunch: {
        time: "12:30 PM",
        menu: "Plantain and beef stew with rice and steamed broccoli",
        calories: "670 kcal",
      },
      dinner: {
        time: "8:00 PM",
        menu: "Plantain with beef stew and a side of roasted vegetables",
        calories: "590 kcal",
      },
    },
    sunday: {
      breakfast: {
        time: "7:00 AM",
        menu: "Noodles with boiled eggs and a side of mixed vegetables",
        calories: "430 kcal",
      },
      lunch: {
        time: "12:30 PM",
        menu: "Jollof rice with chicken and a side of mixed greens",
        calories: "640 kcal",
      },
      dinner: {
        time: "8:00 PM",
        menu: "Spaghetti stir-fry with beef and a side of roasted vegetables",
        calories: "560 kcal",
      },
    },
  };

  const snacks = [
    {
      name: "Fresh fruit",
      timing: "10:30 AM",
      calories: "100 kcal",
      icon: "fruit",
    },
    {
      name: "Yogurt with honey or nuts",
      timing: "3:30 PM",
      calories: "150 kcal",
      icon: "dairy",
    },
    {
      name: "Roasted plantain chips",
      timing: "Any time",
      calories: "120 kcal",
      icon: "chips",
    },
    {
      name: "Boiled peanuts or roasted nuts",
      timing: "Any time",
      calories: "160 kcal",
      icon: "nuts",
    },
    {
      name: "Vegetable sticks or peanut butter",
      timing: "Any time",
      calories: "140 kcal",
      icon: "veggies",
    },
  ];

  const MealIcon = ({ type }) => {
    switch (type) {
      case "breakfast":
        return <Coffee className="w-4 h-4" />;
      case "lunch":
        return <Utensils className="w-4 h-4" />;
      case "dinner":
        return <Moon className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const SnackIcon = ({ type }) => {
    switch (type) {
      case "fruit":
        return <Apple className="w-4 h-4 text-orange-600" />;
      case "dairy":
        return <Milk className="w-4 h-4 text-orange-600" />;
      case "chips":
        return <Cookie className="w-4 h-4 text-orange-600" />;
      case "nuts":
        return <Banana className="w-4 h-4 text-orange-600" />;
      case "veggies":
        return <Carrot className="w-4 h-4 text-orange-600" />;
      default:
        return <Cookie className="w-4 h-4 text-orange-600" />;
    }
  };

  return (
    <div className="tracking-tight flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div
        className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-lg shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center px-4 py-4">
            <div>
              <h1 className="text-2xl font-semibold text-slate-800">
                Khaleel&#39;s Meal Planner
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Day Selector */}
      <div className="fixed top-14 left-0 right-0 z-10 bg-white/80 backdrop-blur-lg">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`flex flex-col items-center min-w-[4rem] p-3 rounded-xl transition-all ${
                  selectedDay === day
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-200"
                    : "bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                <span className="text-xs font-medium uppercase">
                  {day.slice(0, 3)}
                </span>
                <div
                  className={`w-1 h-1 rounded-full mt-2 ${
                    selectedDay === day ? "bg-white" : "bg-orange-200"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 pb-24 pt-40 max-w-md mx-auto w-full">
        {activeTab === "meals" && (
          <div className="space-y-4">
            {Object.entries(mealPlan[selectedDay]).map(
              ([mealType, details]) => (
                <Card
                  key={mealType}
                  className="border-0 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-orange-100 rounded-xl group-hover:bg-orange-200 transition-colors">
                          <MealIcon type={mealType} />
                        </div>
                        <div>
                          <h3 className="font-medium font-semibold capitalize text-slate-800">
                            {mealType}
                          </h3>
                          <div className="flex items-center gap-2 text-xs text-slate-500">
                            <Clock className="w-3 h-3" />
                            <span>{details.time}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="text-xs font-medium text-orange-500 bg-orange-50 px-3 py-1 rounded-full">
                          {details.calories}
                        </span>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm pl-12">
                      {details.menu}
                    </p>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        )}

        {activeTab === "snacks" && (
          <div className="space-y-4">
            {snacks.map((snack, index) => (
              <Card
                key={index}
                className="border-0 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-orange-100 rounded-xl group-hover:bg-orange-200 transition-colors">
                        <SnackIcon type={snack.icon} />
                      </div>
                      <div>
                        <p className="text-slate-700 text-sm">{snack.name}</p>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Clock className="w-3 h-3" />
                          <span>{snack.timing}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-orange-500 bg-orange-50 px-3 py-1 rounded-full">
                      {snack.calories}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-10 left-0 right-0 z-10 bg-white/80 backdrop-blur-lg border-t border-slate-200">
        <div className="flex justify-around max-w-md mx-auto">
          {["meals", "snacks"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex flex-col items-center py-3 px-6 rounded-xl transition-all ${
                activeTab === tab
                  ? "text-orange-500 bg-orange-50"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {tab === "meals" ? (
                <Calendar className="w-5 h-5" />
              ) : (
                <Cookie className="w-5 h-5" />
              )}
              <span className="text-xs mt-1 font-medium capitalize">{tab}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        html {
          scroll-behavior: smooth;
        }

        @media (hover: none) {
          * {
            -webkit-tap-highlight-color: transparent;
          }
        }
      `}</style>
    </div>
  );
};

export default MealPlanApp;
