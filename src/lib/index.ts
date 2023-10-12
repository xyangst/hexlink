import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
export const random = (min: number, max: number) => min + Math.random() * (max - min)
export const randomInt = (min: number, max: number) => Math.floor(random(min, max) + 1)
