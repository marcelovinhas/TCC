// import PushNotification from 'react-native-push-notification';
// import { INotification } from '../../pages/Eventos';

// class Notification {
//   configure(onNotification: (notification: typeof PushNotification) => void) {
//     PushNotification.configure({
//       onNotification: onNotification,
//       requestPermissions: false,
//     });
//   }

//   notifySchedule(notification: INotification) {
//     PushNotification.localNotificationSchedule({
//       title: 'Lembrete',
//       id: notification.id.toString(),
//       message: notification.assunto,
//       date: new Date(notification.date),
//     });
//   }

//   cancelNofication(notificationId: string) {
//     PushNotification.cancelLocalNotifications({id: notificationId});
//   }
// }

// export default new Notification();
