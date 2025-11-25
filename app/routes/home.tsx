import HomePage from "~/features/conversion-rate/pages/home/HomePage";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kameleoon Hometask | Conversion Rate" },
    { name: "description", content: "Hometask for Kameleoon" },
  ];
}

export default function Home() {
  return <HomePage />;
}
