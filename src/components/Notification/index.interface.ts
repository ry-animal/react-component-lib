export enum NotificationVariant {
  Error = "error",
  Information = "information",
  Success = "success",
}
export interface NotificationProps {
  /**
   * Notification Title
   */
  heading?: string;
  /**
   * List of list items to display
   */
  items?: string[];
  /**
   * Notification Variant (enum: NotificationVariant)
   */
  variant?: NotificationVariant;
}
