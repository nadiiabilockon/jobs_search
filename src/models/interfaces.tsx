export interface ToggleLinks {
  (arg: boolean): void;
}

export interface HandleChange {
  (e: React.FormEvent<HTMLInputElement>): void;
}

export interface HandleSearch {
  (e: React.FormEvent): void;
}
