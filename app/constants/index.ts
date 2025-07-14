import type { AxisModel } from "@syncfusion/ej2-react-charts";
import { formatDate } from "lib/utils";

export const sidebarItems = [
  {
    id: 1,
    icon: "/assets/icons/home.svg",
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    id: 3,
    icon: "/assets/icons/users.svg",
    label: "All Users",
    href: "/all-users",
  },
  {
    id: 4,
    icon: "/assets/icons/itinerary.svg",
    label: "AI Trips",
    href: "/trips",
  },
];

export const chartOneData: object[] = [
  {
    x: "Jan",
    y1: 0.5,
    y2: 1.5,
    y3: 0.7,
  },
  {
    x: "Feb",
    y1: 0.8,
    y2: 1.2,
    y3: 0.9,
  },
  {
    x: "Mar",
    y1: 1.2,
    y2: 1.8,
    y3: 1.5,
  },
  {
    x: "Apr",
    y1: 1.5,
    y2: 2.0,
    y3: 1.8,
  },
  {
    x: "May",
    y1: 1.8,
    y2: 2.5,
    y3: 2.0,
  },
  {
    x: "Jun",
    y1: 2.0,
    y2: 2.8,
    y3: 2.5,
  },
];

export const travelStyles = [
  "Relaxed",
  "Luxury",
  "Adventure",
  "Cultural",
  "Nature & Outdoors",
  "City Exploration",
];

export const interests = [
  "Food & Culinary",
  "Historical Sites",
  "Hiking & Nature Walks",
  "Beaches & Water Activities",
  "Museums & Art",
  "Nightlife & Bars",
  "Photography Spots",
  "Shopping",
  "Local Experiences",
];

export const budgetOptions = ["Budget", "Mid-range", "Luxury", "Premium"];

export const groupTypes = ["Solo", "Couple", "Family", "Friends", "Business"];

export const footers = ["Terms & Condition", "Privacy Policy"];

export const selectItems = [
  "groupType",
  "travelStyle",
  "interest",
  "budget",
] as (keyof TripFormData)[];

export const comboBoxItems = {
  groupType: groupTypes,
  travelStyle: travelStyles,
  interest: interests,
  budget: budgetOptions,
} as Record<keyof TripFormData, string[]>;

export const userXAxis: AxisModel = { valueType: "Category", title: "Day" };
export const useryAxis: AxisModel = {
  minimum: 0,
  maximum: 10,
  interval: 2,
  title: "Count",
};

export const tripXAxis: AxisModel = {
  valueType: "Category",
  title: "Travel Styles",
  majorGridLines: { width: 0 },
};

export const tripyAxis: AxisModel = {
  minimum: 0,
  maximum: 10,
  interval: 2,
  title: "Count",
};

export const CONFETTI_SETTINGS = {
  particleCount: 200, // Number of confetti pieces
  spread: 60, // Spread of the confetti burst
  colors: ["#ff0", "#ff7f00", "#ff0044", "#4c94f4", "#f4f4f4"], // Confetti colors
  decay: 0.95, // Gravity decay of the confetti
};

export const LEFT_CONFETTI = {
  ...CONFETTI_SETTINGS,
  angle: 45, // Direction of the confetti burst (90 degrees is top)
  origin: { x: 0, y: 1 }, // Center of the screen
};

export const RIGHT_CONFETTI = {
  ...CONFETTI_SETTINGS,
  angle: 135,
  origin: { x: 1, y: 1 },
};

export const user = { name: "Aditya" };
export const dashboardStats = {
  totalUsers: 1452,
  usersJoined: { currentMonth: 194, lastMonth: 209 },
  totalTrips: 134,
  tripsCreated: { currentMonth: 9, lastMonth: 7 },
  userRole: { total: 68, currentMonth: 72, lastMonth: 65 },
};
export const allTrips = [
  {
    id: 1,
    name: "Himalayan Escape",
    imageUrls: ["/assets/images/sample.jpeg"],
    itinerary: [{ location: "Manali" }],
    tags: ["Adventure", "Nature"],
    travelStyle: "Solo",
    estimatedPrice: "$700",
  },
  {
    id: 2,
    name: "Desert Dreams",
    imageUrls: ["/assets/images/sample.jpeg"],
    itinerary: [{ location: "Jaisalmer" }],
    tags: ["Cultural", "Heritage"],
    travelStyle: "Family",
    estimatedPrice: "$1,200",
  },
  {
    id: 3,
    name: "Backwater Bliss",
    imageUrls: ["/assets/images/sample.jpeg"],
    itinerary: [{ location: "Alleppey" }],
    tags: ["Relaxation", "Nature"],
    travelStyle: "Couple",
    estimatedPrice: "$1,000",
  },
  {
    id: 4,
    name: "Eastern Rhythms",
    imageUrls: ["/assets/images/sample.jpeg"],
    itinerary: [{ location: "Kolkata" }],
    tags: ["Festivals", "Food"],
    travelStyle: "Friends",
    estimatedPrice: "$900",
  },
  {
    id: 5,
    name: "Spiritual Sojourn",
    imageUrls: ["/assets/images/sample.jpeg"],
    itinerary: [{ location: "Varanasi" }],
    tags: ["Spiritual", "Historical"],
    travelStyle: "Solo",
    estimatedPrice: "$800",
  },
];
export const users = [
  {
    id: 1,
    name: "Aarav Mehta",
    email: "aarav.mehta@example.com",
    imageUrl: "/assets/images/aarav.webp",
    dateJoined: formatDate("2025-03-12"),
    itineraryCreated: 6,
    status: "user",
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    imageUrl: "/assets/images/priya.webp",
    dateJoined: formatDate("2025-04-05"),
    itineraryCreated: 11,
    status: "user",
  },
  {
    id: 3,
    name: "Rohan Iyer",
    email: "rohan.iyer@example.com",
    imageUrl: "/assets/images/rohan.webp",
    dateJoined: formatDate("2025-02-18"),
    itineraryCreated: 9,
    status: "admin",
  },
  {
    id: 4,
    name: "Sneha Patel",
    email: "sneha.patel@example.com",
    imageUrl: "/assets/images/sneha.webp",
    dateJoined: formatDate("2025-05-10"),
    itineraryCreated: 3,
    status: "user",
  },
  {
    id: 5,
    name: "Vikram Desai",
    email: "vikram.desai@example.com",
    imageUrl: "/assets/images/vikram.webp",
    dateJoined: formatDate("2025-01-28"),
    itineraryCreated: 12,
    status: "admin",
  },
];
