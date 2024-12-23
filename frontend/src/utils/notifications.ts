import { NotificationData, NotificationsStore, notifications } from "@mantine/notifications";

export function show(notification: NotificationData, store?: NotificationsStore | undefined) {
  const notificationId = notifications.show({
    className: `mb-1 sm:mb-3 last:mb-0 ${notification.className}`,
    ...notification
  }, store);
  return {
    notification: notificationId,
    close: () => notifications.hide(notificationId),
  };
}

export function showLoading(notification: NotificationData, store?: NotificationsStore | undefined) {
  return show({
    withCloseButton: false,
    autoClose: false,
    loading: true,
    color: 'blue',
    ...notification
  }, store);
}

export function showSuccess(notification: NotificationData, store?: NotificationsStore | undefined) {
  return show({
    color: 'green',
    ...notification
  }, store);
}

export function showWarning(notification: NotificationData, store?: NotificationsStore | undefined) {
  return show({
    color: 'yellow',
    ...notification
  }, store);
}

export function showError(notification: NotificationData, store?: NotificationsStore | undefined) {
  return show({
    color: 'red',
    ...notification
  }, store);
}