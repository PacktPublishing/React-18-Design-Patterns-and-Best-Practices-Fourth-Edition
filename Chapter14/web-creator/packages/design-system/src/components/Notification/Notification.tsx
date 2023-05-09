import React, { FC, useEffect } from 'react'
import { AppearanceTypes, Placement, ToastProvider, useToasts } from 'react-toast-notifications'

import usePrevious from '../../usePrevious'
import CustomNotification from './CustomNotification'

type Props = {
  notification: {
    id: number
    message: string
  }
  type: AppearanceTypes
  position?: Placement
  duration?: number
  maxNotifications?: number
}

type WrapperProps = {
  notification: {
    id: number
    message: string
  }
  type: AppearanceTypes
  maxNotifications?: number
}

const NotificationWrapper: FC<WrapperProps> = ({ notification, type, maxNotifications = 5 }) => {
  const { addToast } = useToasts()
  const prevProps: any = usePrevious({ notification })
  const notifications =
    (typeof window !== 'undefined' && document.querySelectorAll('.notification')) || []

  useEffect(() => {
    if (
      !prevProps ||
      (prevProps &&
        prevProps.notification.id !== notification.id &&
        notifications.length < maxNotifications)
    ) {
      addToast(notification.message, { appearance: type })
    }
  }, [notification, prevProps])

  return null
}

const Notification: FC<Props> = ({
  notification,
  type,
  position = 'top-right',
  duration = 0,
  maxNotifications
}) => (
  <ToastProvider
    // @ts-ignore
    components={{ Toast: CustomNotification }}
    autoDismiss={duration > 0}
    placement={position}
    autoDismissTimeout={duration < 999 ? duration * 1000 : duration}
  >
    <NotificationWrapper
      notification={notification}
      type={type}
      maxNotifications={maxNotifications}
    />
  </ToastProvider>
)

export default Notification
