export interface StatBadgeProps {
  /**
   * Label to describe stat
   */
  label: string;
  /**
   * Amount of described stat
   */
  value: number;
  /**
   * Shows ETH symbol if true
   */
  isETH?: boolean;
  /**
   * Shows USD symbol if true
   */
  isUSD?: boolean;
  /**
   * Called when button clicked
   */
  onClick?: () => void;
}

export interface StyledStatBadgeProps extends StatBadgeProps {
  /**
   * Toggle light and dark theme
   */
  isDarkTheme?: boolean;
}

export interface StatsBlockProps {
  /**
   * List of stats to show
   */
  stats: StatBadgeProps[];
  /**
   * Toggle light and dark theme
   */
  isDarkTheme?: boolean;
}
