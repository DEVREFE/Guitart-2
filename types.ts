import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface PricingFeature {
  name: string;
  core: boolean;
  advanced: boolean;
  bold: boolean;
}

export interface Pillar {
  title: string;
  subtitle: string;
  items: string[];
  icon: LucideIcon;
}