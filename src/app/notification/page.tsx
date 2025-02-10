"use client"

import { getNotifications, markNotificationsAsRead } from "@/action/notification.action";
import { NotificationsSkeleton } from "@/components/NotificationSkeleton";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";

type Notifications = Awaited<ReturnType<typeof getNotifications>>
type Notification = Notifications[number]

const NotificationPage = () => {
  const [notification, SetNotification] = useState<Notification[]>([]);
  const [isLoading, SetIsLoading] = useState(true);

  useEffect(()=>{
    const fetchNotification = async () => {
      SetIsLoading(true)
      try {
        const data = await getNotifications();
        SetNotification(data)

        const unreadIds = data.filter(n => !n.read).map(n => n.id)
        if(unreadIds.length > 0) await markNotificationsAsRead(unreadIds)
      } catch (error) {
        toast.error("Failed to fetch notification")
      } finally {
        SetIsLoading(false)
      }
    }

    fetchNotification()
  },[])

  if(isLoading) return <NotificationsSkeleton/>

  return (
    <div>page</div>
  )
}

export default NotificationPage