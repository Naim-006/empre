export interface TeamMember {
  id: string;
  name: string;
  role: string;
  color: string;
}

/**
 * 4-member team configuration — Engineering Mathematics applied to AI.
 *
 *   Member 1: Introduction through Diffusion Models (Slides 1–5)
 *   Member 2: Fourier Transform — AI for Sound & Speech (Slides 6–7)
 *   Member 3: Laplace Transform — AI Control & Stability (Slide 8)
 *   Member 4: Synthesis & Conclusion (Slides 9–11)
 */
export const TEAM: TeamMember[] = [
  {
    id: "252-15-178",
    name: "Naim Hossain",
    role: "Introduction through Diffusion Models",
    color: "#2563eb",
  },
  {
    id: "252-15-363",
    name: "Md Nuruzzaman Raju",
    role: "Fourier Transform — AI for Sound & Speech",
    color: "#7c3aed",
  },
  {
    id: "252-15-467",
    name: "Tahsin Afridi",
    role: "Laplace Transform — AI Control & Stability",
    color: "#0ea5a4",
  },
  {
    id: "252-15-839",
    name: "Nazmus Sakib",
    role: "Synthesis & Conclusion",
    color: "#f59e0b",
  },
];
