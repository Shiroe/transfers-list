export interface IIcon {
  color?: string;
  size?: number;
}

export interface NavItemIcon extends IIcon {
  isActive?: boolean;
  className?: string;
}
